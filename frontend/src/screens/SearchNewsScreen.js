import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listApplications } from '../actions/applicationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Application from '../components/Application';
// import { prices } from '../utils';
// import OrderScreen from './OrderScreen';
import {Helmet} from 'react-helmet';
import {withNamespaces} from 'react-i18next';
import Pagination from '../Pagination';
import Sidebar from '../components/Sidebar';

export default withNamespaces() (function SearchNewsScreen( props){
    const {t} = props;
    const {
        title = 'all',
        articlecategory = 'all', 
    } = useParams();
    const dispatch = useDispatch();
    const applicationList = useSelector((state) => state.applicationList);
    const { loading, error, applications } = applicationList;

    useEffect(() => {
        dispatch(
          listApplications({
            title: title !== 'all' ? title : '',
            articlecategory: articlecategory !== 'all' ? articlecategory : '',
            
          })
        );
      }, [  articlecategory,  dispatch, title]);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(20);
    //get current products
    const indexOfLastProduct = currentPage * productPerPage;
    const inxdexOfFirstProduct = indexOfLastProduct - productPerPage;
    //change page
    const paginate = (pagehomeNumber) => setCurrentPage(pagehomeNumber);
    

    const getFilterUrl = (filter) => {
    const filterNewscategory = filter.articlecategory|| articlecategory;
    return `/search-news/articlecategory/${filterNewscategory}`;
    };

    return(
        <div className="main-content">
            <Helmet>
                <title>{t("search.label")}</title>
            </Helmet>
            
            <div className='searchpage'>
            {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="search-result">{applications.length} {t("result.label")}</div>
        )}
        <div className="search-box">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {applications.length === 0 && (
                <MessageBox>No News Found</MessageBox>
              )}
              <div className="applications">
                {applications.slice(inxdexOfFirstProduct, indexOfLastProduct).map((application) => (
                  <Application key={application._id} application={application}></Application>
                ))}
              </div>
              <Pagination productPerPage={productPerPage} totalProduct={applications.length} paginate={paginate}  currentPage={currentPage}/>
            </>
          )}
        </div>
            </div>
        </div>
    )
})