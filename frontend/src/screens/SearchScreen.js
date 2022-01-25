import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
// import { prices } from '../utils';
// import OrderScreen from './OrderScreen';
import {Helmet} from 'react-helmet';
import {withNamespaces} from 'react-i18next';
import Pagination from '../Pagination';
import Sidebar from '../components/Sidebar';


export default withNamespaces() (function SearchScreen( props) {
  const {t} = props;
  const {
    name = 'all',
    category = 'all',
    brand = 'all', 
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productBrandList = useSelector((state) => state.productBrandList);
   const {
       loading: loadingBrands,
       error: errorBrands,
       } = productBrandList;
  
  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        // subcategory: subcategory !== 'all' ? subcategory : '',
        brand: brand !== 'all' ? brand : '',
      })
    );
  }, [  category, brand, dispatch, name]);
                                                                                                  
  const getFilterUrl = (filter) => {
    const filterCategory = filter.category|| category;
    //  const filterSubcategory = filter.category || category;
    const filterBrand = filter.brand || brand;
    // const filterName = filter.name || name; 
    return `/search/category/${filterCategory}/brand/${filterBrand}`;
  };
  function dropdownmenu() {
    document.getElementById("myDropdown3").classList.toggle("show");
  } 


  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(20);
  //get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const inxdexOfFirstProduct = indexOfLastProduct - productPerPage;
  //change page
  const paginate = (pagehomeNumber) => setCurrentPage(pagehomeNumber);
  

  const brandSet = new Set(products && products.map(item => item.brand));
  const brandList = Array.from(brandSet).sort();
  return <div className="main-content">
      <Helmet>
        <title>{t("search.label")}</title>
      </Helmet>
      <Sidebar />
      <div className="search-screen top">       
        <div className="subcategory">
        <h3>{t("brand.label")}<button className="resdropdown-btn dropbrand" onClick={dropdownmenu}><i className="fa fa-caret-down"></i></button></h3>
            {loadingBrands ? (
              <LoadingBox></LoadingBox>
            ) : errorBrands ? (
              <MessageBox variant="danger">{errorBrands}</MessageBox>
            ) : (
              <ul className="subcategory-container" id="myDropdown3">
                <li >
                  <Link
                    className={'all' === brand ? 'active' : '' }
                    id="brand-link"
                    to={getFilterUrl({ brand: 'all' })}
                  >
                    {t("all.label")}
                  </Link>
                </li>
                {brandList.map((c) => (
                  <li key={c}>
                    <Link
                      id="brand-link"
                      className={c === brand ? 'active' : ''}
                      to={getFilterUrl({ brand: c })}
                    >
                      {c.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())}
                    </Link>
                  </li>
                )).filter((val, id , array) => array.indexOf(val) == id)}
              </ul>
            )}               
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="search-result">{products.length} {t("result.label")}</div>
        )}
        <div className="search-box">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="products">
                {products.slice(inxdexOfFirstProduct, indexOfLastProduct).map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
              <Pagination productPerPage={productPerPage} totalProduct={products.length} paginate={paginate}  currentPage={currentPage}/>
            </>
          )}
        </div>
      </div>
    </div>
})