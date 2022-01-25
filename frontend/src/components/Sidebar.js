import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import allcategories from '../allcategories.js';
import { listProductCategories } from '../actions/productActions';

export default withNamespaces() (function Sidebar({t}){
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  function dropdownmenu2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function closeDropdown2(){
    const dropdown2 = document.querySelector('.category-menu'); 
    if(dropdown2.classList.contains("show")){
      dropdown2.classList.remove("show");
    }
  }
    return <aside className="sidebar">      
            <strong className="category">{t("Categories")} <button onClick={dropdownmenu2} className="resdropdown-btn"><i className="fas fa-sort-down"></i></button></strong>
            <ul className="category-menu" id="myDropdown2">
              {loadingCategories ? (
                <LoadingBox></LoadingBox>
              ) : errorCategories ? (
                <MessageBox variant="danger">{errorCategories}</MessageBox>
              ) : (
                allcategories.map((val, key) => (          
                  <li key={val.category}>
                      <Link  
                        to={`/search/category/${val.urlcategory}`}
                        onClick={closeDropdown2}
                      >
                       <i className="fas fa-caret-right"></i> {t("switchcategory", {val})} 
                      </Link>
                    </li>              
                ))
              )}
            </ul>
           
            <div className="sidebar-title res">
              <a href="https://www.youtube.com/channel/UCWvi8FoZbVU-PMQHDsYC5pQ/featured" target="_blank" rel="noopener noreferrer">{t("Video channel")}</a>
            </div>
            <div className="sidebar-content res">
              <iframe src="https://www.youtube.com/embed/xjndBrxqtzU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="sidebar-title res">
              <a href="#">{t("Online Support")}</a>
            </div>
            <div className="sidebar-content res">
              <h3>Zalo  0988 816 815</h3>
              <img src="./images/hotline.png" alt="hotline"/>           
            </div>
          </aside>

})