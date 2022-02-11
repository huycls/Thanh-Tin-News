import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HotNews from '../components/HotNews';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listApplications } from '../actions/applicationActions';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Pagination from '../Pagination';
import ApplicationReview from '../components/ApplicationReview';
import Application from '../components/Application';
import SearchBox from '../components/SearchBox';
import {Route} from 'react-router-dom';



export default withNamespaces() (function HomeScreen({t}) {
  const dispatch = useDispatch();
  const applicationList = useSelector((state) => state.applicationList);
      const { loading, error, applications } = applicationList;
      useEffect(() => {
        dispatch(listApplications({}));
        }, [dispatch]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(20);

  //get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const inxdexOfFirstProduct = indexOfLastProduct - productPerPage;

  //change page
  const paginate = (pagehomeNumber) => setCurrentPage(pagehomeNumber);
  return (
    <div className='homepage'>
    <Helmet>
      <title>Trang tin tức công nghệ</title>
    </Helmet>
      <div className='content-field'>
        <div className='top-home'>
          <HotNews />
        </div>
        <div className='mid-home'>
        <h2>Tin khác</h2>
              {loading ? (
                      <LoadingBox></LoadingBox>
                  ) : error ? (
                      <MessageBox variant="danger">{error}</MessageBox>
                  ) : (
                      <div>
                          {applications.length === 0 && <MessageBox>{t("noproduct.label")}</MessageBox>}
                          <div  className="newsfield"  id="myDropdown">
                              {applications && applications.filter(item => item.articletype == "tin-tuc").slice(0).reverse().slice(1).map((application) => (
                              <Application key={application._id} application={application}></Application>
                              ))}
                          </div>
                        
                      </div> 
                  )}                    
        </div>
      </div>
      <div className='side-field'>        
        <div className="search-bar" id="search-bar"> 
          <Route
            render={({ history }) => (
              <SearchBox history={history}></SearchBox>
            )}
          ></Route>
        </div>
        <div className='news-sidebar'>
          <h2>Tin ứng dụng</h2>
            {loading ? (
                      <LoadingBox></LoadingBox>
                  ) : error ? (
                      <MessageBox variant="danger">{error}</MessageBox>
                  ) : (
                      <div>
                          {applications.length === 0 && <MessageBox>{t("noproduct.label")}</MessageBox>}
                          <div  className="news-content"  id="myDropdown">
                              {applications && applications.filter(item => item.articletype == "ung-dung").slice(0).reverse().map((application) => (
                              <ApplicationReview key={application._id} application={application}></ApplicationReview>
                              ))}
                          </div>
                        
                      </div> 
                  )} 
          </div>
          <div className='news-sidebar'>
            <h2>Sự kiện</h2>
            {loading ? (
                      <LoadingBox></LoadingBox>
                  ) : error ? (
                      <MessageBox variant="danger">{error}</MessageBox>
                  ) : (
                      <div>
                          {applications.length === 0 && <MessageBox>{t("noproduct.label")}</MessageBox>}
                          <div  className="news-content"  id="myDropdown">
                              {applications && applications.filter(item => item.articletype == "su-kien").slice(0).reverse().map((application) => (
                              <ApplicationReview key={application._id} application={application}></ApplicationReview>
                              ))}
                          </div>
                        
                      </div> 
                  )}                    
          </div>
      </div>
    </div>
  );
})
