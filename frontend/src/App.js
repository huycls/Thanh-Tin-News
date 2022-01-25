import React, { Fragment, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
// import OrderHistoryScreen from './screens/OrderHistoryScreen';
// import OrderScreen from './screens/OrderScreen';
// import PaymentMethodScreen from './screens/PaymentMethodScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ApplicationEditScreen from './screens/ApplicationEditScreen';
import ApplicationListScreen from './screens/ApplicationListScreen';
import ApplicationScreen from './screens/ApplicationScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ContactScreen from './screens/ContactScreen';
import NewsScreen from './screens/NewsScreen';
import NewsScreen1 from './screens/NewsScreen1';
import NewsScreen2 from './screens/NewsScreen2';
import NewsScreen3 from './screens/NewsScreen3';
import NewsScreen4 from './screens/NewsScreen4';
import Allservices from './screens/Allservices';
import Service1Screen from './screens/Service1Screen';
import Service2Screen from './screens/Service2Screen';
import Service3Screen from './screens/Service3Screen';
import Service4Screen from './screens/Service4Screen';
import NewsProduct from './screens/NewsProduct';
import IntroScreen from './screens/IntroScreen';
import Allnews from './screens/AllNews';
import ScrollToTop from './components/ScrollToTop';
import { listProductCategories, listProductBrands } from './actions/productActions';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';
import {Navbar, Nav} from 'react-bootstrap';
import useScript from './useScript';
import logo from './images/logo.png';
import logovn from './images/vnese.png';
import enlogo from './images/usa.png';
import alp from './images/alp.png';
import consort from './images/consort.png';
import emco from './images/emco.png';
import kruss from './images/kruss.png';
import nabertherm from './images/nabertherm.png';
import gfl from './images/gfl.png';
import pta from './images/pta.png';
import pnshar from './images/pnshar.png';
import chinhsachbaomat from './screens/chinhsachbaomat';
import chinhsachbaohanh from './screens/chinhsachbaohanh';
import phuongthucthanhtoan from './screens/phuongthucthanhtoan';
import huongdanmuahang from './screens/huongdanmuahang';
import $ from 'jquery';
import SearchNewsScreen from './screens/SearchNewsScreen';
import articletypes from './articletypes';




function App({t}) {
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
 
  useEffect(() => {
    dispatch(listProductBrands());
    }, [dispatch]);
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  function dropSearchbar(){
    document.getElementById("search-bar").classList.toggle("show");
  }
  
   function topFunction() {
      $('html, body').animate({scrollTop:0}, 'slow');
  }

  const [expanded, setExpanded] = useState(false);

  window.onload = function(){
    let scrolltotop = document.getElementById('scrolltotop');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrolltotop.style.display = "block";
      } else {
        scrolltotop.style.display = "none";
      }
    }
  }
  
  function handleChangeLang(lang){
    i18n.changeLanguage(lang)
  }
  useScript("https://apps.elfsight.com/p/platform.js");
  
  return (
    <BrowserRouter>
      <div className="grid-container"> 
        <button id="scrolltotop" onClick={topFunction}><i className="fas fa-chevron-up"></i></button>
        <header className="nav-bar" id="navbar">      
          <div className="lower-nav" id="top">
            <div>
              <Link className="brand" to="/">
                <img src={logo} alt="Công-ty-TNHH-Thành-Tín" />
              </Link>
            </div>         
            <div className='right-lowernavbar'>
            
            <div className="search-bar" id="search-bar"> 
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
            </div>
           
            {/* <div className="icon-container">
              <button className="small-searchbar" onClick={dropSearchbar}><i className="fa fa-search"></i></button>            
              <Link to="/gio-hang">
                <i className="fas fa-shopping-basket"></i>
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
            </div> */}
            
            <div className="menu-container" >                          
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content dropdown-nav">
                    <li>
                      <Link to="/profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Order History</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        {t("Log out")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/dang-nhap"><i class="fas fa-user"></i></Link>
              )}
              {userInfo && userInfo.isSeller && (
                <div className="dropdown">
                  <Link to="#admin">
                    Staff <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content dropdown-nav">
                    <li>
                      <Link to="/productlist/seller">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist/seller">Orders</Link>
                    </li>
                  </ul>
                </div>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to="#admin">
                    Admin <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content dropdown-nav">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/applicationlist">Applications</Link>
                    </li>
                    <li>
                      <Link to="/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Orders</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="lang">
              <button onClick = {() => handleChangeLang("vn")}>
                <img src={logovn} alt="vietnamese" />
              </button>
              <button onClick = {() => handleChangeLang("en")}>
                <img src={enlogo} alt="english" />
              </button>
            </div>
            </div>
          </div>
          <Navbar expanded={expanded} bg="#007a37" expand="lg" variant="light" >
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="mr-auto">
                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/" className=" mainnav-link"><i className="fas fa-home " aria-current="page" ></i></Nav.Link>
                <ul className='menu-ul'>
                {
                  articletypes.map((val, key) => (
                    <li key={key}>
                    <Nav.Link onClick={() => setExpanded(false)} as={Link} to={`/tin-tuc/articletype/${val.urlarticletype}`} className="mainnav-link">{t("switchtype", {val})}</Nav.Link>
                    </li>
                  ))
                }
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>        
        <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/dich-vu-ho-tro-online" component={Service4Screen}></Route>
            <Route path="/dich-vu-hieu-chuan" component={Service3Screen}></Route>
            <Route path="/dich-vu-chuan-doan-va-sua-chua" component={Service2Screen}></Route>
            <Route path="/dich-vu-bao-tri" component={Service1Screen}></Route>
            <Route path="/tat-ca-dich-vu" component={Allservices}></Route>
            <Route path="/thong-tin-lien-he" component={ContactScreen}></Route>
            <Route path="/tin-tuc/articletype/:articletype" component={Allnews} exact></Route>
            <Route path="/gioi-thieu" component={IntroScreen}></Route>
            <Route path="/tin-san-pham-moi" component={NewsProduct}></Route>
            {/* <Route path="/giai-phap" component={SolutionScreen}></Route> */}
            <Route path="/cong-ty-thanh-tin-la-nha-phan-phoi-chinh-thuc-cho-hang-mettler-toledo" component={NewsScreen}></Route>
            <Route path="/thong-bao-thay-doi-ten-giao-dich" component={NewsScreen1}></Route>
            <Route path="/analytica-viet-nam-2013" component={NewsScreen2}></Route>
            <Route path="/tuyen-nhan-vien-kinh-doanh" component={NewsScreen3}></Route>
	    <Route path="/may-do-sr-sumet-germany-pta-group" component={NewsScreen4}></Route>
            <Route path="/seller/:id" component={SellerScreen}></Route>
            <Route path="/gio-hang/:id?" component={CartScreen}></Route>
            <Route path="/chinhsachbaomat" component={chinhsachbaomat}></Route>
            <Route path="/chinhsachbaohanh" component={chinhsachbaohanh}></Route>
            <Route path="/phuongthucthanhtoan" component={phuongthucthanhtoan}></Route>
            <Route path="/huongdanmuahang" component={huongdanmuahang}></Route>
            <Route 
              path="/tin-moi/:id" 
              component={ApplicationScreen} 
              exact 
            ></Route>
            <Fragment>
              <ScrollToTop />
              <Route path="/san-pham/:id" component={ProductScreen}
              exact
              ></Route>             
            </Fragment>
            <Route
              path="/san-pham/:id/edit"
              component={ProductEditScreen}
              exact
            ></Route>
            <Route
              path="/ung-dung/:id/edit"
              component={ApplicationEditScreen}
              exact
            ></Route>
            <Route path="/dang-nhap" component={SigninScreen}></Route>
            <Route path="/dang-ky-tai-khoan" component={RegisterScreen}></Route>
            <Route path="/yeu-cau-bao-gia" component={ShippingAddressScreen}></Route>
          
            <Route
              path="/search/name/:name?"
              component={SearchScreen}
              exact
            ></Route>
            <Route
              path="/search-news/articlecategory/:articlecategory"
              component={SearchNewsScreen}
               exact
            ></Route>
            <Route
              path="/search/category/:category"
              component={SearchScreen}
               exact
            ></Route>
            <Route
              path="/search/category/:category/brand/:brand"
              component={SearchScreen}
              exact
            ></Route>
	    <Route
              path="/search/brand/:brand"
              component={SearchScreen}
              exact
            ></Route>

            {/* <Route
              path="/search/category/:category/brand/:brand/name/:name"
              component={SearchScreen}
              exact
            ></Route>
           */}
            <Fragment>
              <ScrollToTop />
              {/* <Route
              path="/search/category/:category/brand/:brand/name/:name/pageNumber/:pageNumber"
              component={SearchScreen}
              exact
              ></Route> */}
            </Fragment>
                   
            <PrivateRoute
              path="/profile"
              component={ProfileScreen}
            ></PrivateRoute>
            {/* <PrivateRoute path="/map" component={MapScreen}></PrivateRoute> */}
            <AdminRoute
              path="/productlist"
              component={ProductListScreen}
              exact
            ></AdminRoute>
            <AdminRoute
              path="/applicationlist"
              component={ApplicationListScreen}
              exact
            ></AdminRoute>
            <Fragment>
              
              <AdminRoute
              path="/productlist/pageNumber/:pageNumber"
              component={ProductListScreen}
              exact
            ></AdminRoute>
            <ScrollToTop />
            </Fragment>         
           
            <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
            <AdminRoute
              path="/user/:id/edit"
              component={UserEditScreen}
            ></AdminRoute>
            
            <SellerRoute
              path="/productlist/seller"
              component={ProductListScreen}
            ></SellerRoute>
          <div className="collect-email">
            <p>{t("Enter email to receive latest news from us")}</p>
            <form id="form"  method="GET" action="https://script.google.com/macros/s/AKfycbyTSr30R7jPcxOqEYFOuxNOjvKeKWCmBqN2tnnRYTrXPnOElveM/exec">
              <input id="email" type="email" name="email_user" required/>
              <button type="submit" id="submit-form" placeholder="Email">{t("Send")}</button>
            </form>
          </div>
        </main>
        <div className="footer">
              <div className="copyright">
            <div className="copyright-container"><span>COPYRIGHT &copy; 2021</span> <span>{t("Products - Applications Thanh Tin Instrument And Chemical Co.LTD")}</span></div>
          </div>  
        </div>  
      </div>
    </BrowserRouter>
    
  );
}

export default withNamespaces()(App);
