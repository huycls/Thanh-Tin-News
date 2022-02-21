import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Application from '../models/applicationModel.js';
import User from '../models/userModel.js';
import {isAdmin, isAuth, isSellerOrAdmin} from '../utils.js';

const applicationRouter = express.Router();

applicationRouter.get(
    '/',
    expressAsyncHandler(async (req, res)=>{
        const title = req.query.title || '';
        const entitle = req.query.entitle || '';
        const articleimage = req.query.articleimage || '';
        const content = req.query.content || '';
        const encontent = req.query.encontent || '';
        const articletype = req.query.articletype || '';
        const enarticletype = req.query.enarticletype || '';
         const articlecategory = req.query.articlecategory || '';
        const enarticlecategory = req.query.enarticlecategory || '';
        
        const titleFilter = title ? {title: {$regex: title, $options: 'i' } } : {};
        const entitleFilter = entitle ? {entitle } : {};
        const articleimageFilter = articleimage ? {articleimage} : {};
        const contentFilter = content ? {content} : {};
        const encontentFilter = encontent ? {encontent} : {};
        const articletypeFilter = articletype ? {articletype} : {};
        const enarticletypeFilter = enarticletype ? {enarticletype} : {};
        const articlecategoryFilter = articlecategory ? {articlecategory} : {};
        const enarticlecategoryFilter = enarticlecategory ? {enarticlecategory} : {};
        const count = await Application.count({
            ...titleFilter,
            ...entitleFilter,
            ...articleimageFilter,
            ...contentFilter,
            ...encontentFilter,
            ...articletypeFilter,
            ...enarticletypeFilter,
            ...articlecategoryFilter,
            ...enarticlecategoryFilter,
        });
        const applications = await Application.find({
            ...titleFilter,
            ...entitleFilter,
            ...articleimageFilter,
            ...contentFilter,
            ...encontentFilter,
            ...articletypeFilter, 
            ...enarticletypeFilter,
            ...articlecategoryFilter,
            ...enarticlecategoryFilter,
        })
        res.send({applications});
    })
);

applicationRouter.get(
    '/articlecategories',
    expressAsyncHandler(async (req, res) => {
      const articlecategories = await Application.find().distinct('articlecategory');
      res.send(articlecategories);
    })
);
  
applicationRouter.get(
    '/articletypes',
    expressAsyncHandler(async (req, res) =>{
        const articletypes = await Application.find().distinct('articletype');
        res.send(articletypes);
    })
);  

applicationRouter.get(
    '/:id',
    expressAsyncHandler(async(req, res)=>{
        const application = await Application.findById(req.params.id);
        if (application){
            res.send(application);
        } else {
            res.status(404).send({ message: ' Not found'});
        }
    })
);

applicationRouter.post(
    '/',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res)=>{
        const application = new Application({
            title: 'sample title' + Date.now(),
            entitle: 'sample entitle' + Date.now(),
            articleimage: '/images/3.jpg',
            articletype: 'tin-tuc-va-su-kien',
            enarticletype: 'news-and-events',
            rating: 0,
            numReviews: 0,
            content: 'sample content',
            encontent: 'sample encontent',
            articlecategory: 'Tin tức và sự kiện',
            enarticlecategory: 'News and Events',
        });
        const createdApplication = await application.save();
        res.send({ message: 'application created', application: createdApplication});
    })
);
applicationRouter.put(
    '/:id',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res)=>{
        const applicationId = req.params.id;
        const application = await Application.findById(applicationId);
        if(application){
            application.title = req.body.title;
            application.entitle = req.body.entitle;
            application.articleimage = req.body.articleimage;
            application.articletype = req.body.articletype;
            application.enarticletype = req.body.enarticletype;
            application.content = req.body.content;
            application.encontent = req.body.encontent;
            application.articlecategory = req.body.articlecategory;
            application.enarticlecategory = req.body.enarticlecategory;
            const updatedApplication = await application.save();
            res.send({ message: 'Application Updated', application: updatedApplication});
        }  else {
            res.status(404).send({ message: 'Not found'});
        }
    })
);

applicationRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) =>{
        const application = await Application.findById(req.params.id);
        if (application){
            const deleteApplication = await application.remove();
            res.send({ message: 'Application Deleted', application: deleteApplication });
        } else {
            res.status(404).send({ message: 'Not found'});
        }
    })
);

applicationRouter.post('/:id/reviews', isAuth, async (req, res) => {
    const application = await Application.findById(req.params.id);
    if (application) {
      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      application.reviews.push(review);
      application.numReviews = application.reviews.length;
      application.rating =
        application.reviews.reduce((a, c) => c.rating + a, 0) /
        application.reviews.length;
      const updatedApplication = await application.save();
      res.status(201).send({
        data: updatedApplication.reviews[updatedApplication.reviews.length - 1],
        message: 'Comment saved successfully.',
      });
    } else {
      res.status(404).send({ message: 'News Not Found' });
    }
  });

export default applicationRouter;