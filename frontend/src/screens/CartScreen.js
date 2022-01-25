import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Sidebar from '../components/Sidebar';

export default withNamespaces((props) => props.namespaces) (function CartScreen(props) {
  const {t} = props;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/yeu-cau-bao-gia');
  };

  return <div className="main-content">
      <Sidebar />
      <div className="row top cart-screen">
      <Helmet>
        <title>
        {t("cart.label")}
        </title>
      </Helmet>
      <div className="col-2 cartscreen-cart">
          <h1>{t("cart.label")}</h1>    
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            {t("emptycart.label")} <Link to="/">{t("buynow.label")}</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="cart-img rowe">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}                    
                    ></img>
                  </div>
                  <div className="min-10 max-20">
                    <Link to={`/san-pham/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>{item.price} &#8363;</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      {t("delete")}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card cart-card card-body">
          <ul>
            <li>
              <h2>
                {t("total.label")} ({cartItems.reduce((a, c) => a + c.qty, 0)} {t("productqty.label")}): 
                <p>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)} &#8363;</p>
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                {t("submit.label")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
})
