import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART_EMPTY } from '../constants/cartConstants';
import {Link} from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Helmet from 'react-helmet';

export default withNamespaces((props) => props.namespaces) (function ShippingAddressScreen(props) {
  const {t} = props;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [company, setCompany] = useState(shippingAddress.company);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [email, setEmail] = useState(shippingAddress.email);
  const [phonenumber, setPhonenumber] = useState(shippingAddress.phonenumber);
  const dispatch = useDispatch();



    const submitHandler = (e) => {
      e.preventDefault();
      const templateId = 'template_wboxegd';
      sendOrders(templateId, {full_name: fullName, company: company, address: address, city: city, email: email, phonenumber: phonenumber, product: cart.cartItems.map(item => item.name)})
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem('cartItems');   
   };

   const sendOrders = (templateId, variables) =>{
     window.emailjs.send(
       'service_8sszg3c', templateId,
       variables
       ).then( res =>{
         alert('Yêu cầu của bạn đã được gửi thành công!');
         const inputs = document.querySelectorAll('input');
          inputs.forEach(input => input.value = ''); 
       })
       .catch(err => console.error("Oops, có vẻ như đã xảy ra lỗi, hãy thử lại sau.", err))
     
   }
  
  return (
    <div>
    <Helmet>
      <title>{t("confirmorder")}</title>
    </Helmet>
      <form className="form" id="form" onSubmit={submitHandler}>
          <h1>{t("confirmorder")}</h1>    
        <div>
          <label htmlFor="fullName">{t("fullname")}</label>
          <input
            name="Ten_khach_hang"
            type="text"
            id="fullName"
            placeholder=" "
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="address">{t("company")}</label>
          <input
            name="Cong_ty"
            type="text"
            id="company"
            placeholder=" "
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="address">{t("address")}</label>
          <input
            name="Dia_chi"
            type="text"
            id="address"
            placeholder=""
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="city">{t("city")}</label>
          <input
            name="Thanh_pho"
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="Email"
            type="email"
            id="email"
            placeholder=""
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)} 
          ></input>
        </div>
        <div>
          <label htmlFor="phonenumber">{t("phone")}</label>
          <input
            name="SDT"
            type="tel"
            id="phonenumber"
            placeholder=""
            value={phonenumber}
            required
            onChange={(e) => setPhonenumber(e.target.value)}
          ></input>
        </div>
        <div>
          <ul>
            <strong>{t("selected")}:</strong>
            {cart.cartItems.map(item => (
              <li key={item.product}>
                <Link to={`/san-pham/${item.product}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label />
          <button className="primary" id="submit-btn" type="submit">
           {t("submit.label")}
          </button>
        </div>
      </form>
    </div>
  );
})
