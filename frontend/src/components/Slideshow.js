import React, { useEffect, useState }  from 'react';
import {Link} from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { listApplications } from '../actions/applicationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import ApplicationReview from './ApplicationReview'
import {useHistory} from 'react-router-dom';


export default withNamespaces() (function Slideshow(props){
  const {t} = props;
  const dispatch = useDispatch();
  function dropdownmenu() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      //Close dropdown menu when click link
      const applicationList = useSelector((state) => state.applicationList);
      const { loading, error, applications } = applicationList;
      useEffect(() => {
        dispatch(listApplications({}));
        }, [dispatch]); 
        const history = useHistory();
    return  <div className="home-upper">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="./images/1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/4.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/5.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="news"> 
          <div className="news-title"><span>{t("News")}</span><button onClick={dropdownmenu} className="resdropdown-btn"><i className="fas fa-sort-down"></i></button></div>
         
          {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>
                        {applications.length === 0 && <MessageBox>{t("noproduct.label")}</MessageBox>}
                        <div  className="news-content"  id="myDropdown">
                            {applications.slice(0).reverse().map((application) => (
                            <ApplicationReview key={application._id} application={application}></ApplicationReview>
                            ))}
                        </div>
                       
                    </div> 
                )} 
          
        </div>
    </div>
})