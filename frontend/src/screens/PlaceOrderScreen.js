import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="top row placeorder-step">
        <div className="col-2 row">
          <ul className="rowe">
            <li>
              <div className="card card-body">
                <h2>Thông tin khách hàng</h2>
                <p>
                  <strong>Tên khách hàng:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Địa chỉ: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}<br />
                  <strong>Email: </strong> {cart.shippingAddress.email}
                </p>
              </div>
            </li>
           
            <li>
              <div className="card card-body">
                <h2>Hàng đã chọn</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x {item.price} VNĐ = {item.qty * item.price} VNĐ
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Tóm tắt đơn hàng</h2>
              </li>
              <li>
                <div className="row">
                  <div>Tổng số tiền</div>
                  <div>{cart.itemsPrice.toFixed(2)} VNĐ</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>0 VNĐ</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Thuế</div>
                  <div>? VNĐ</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Tổng chi phí</strong>
                  </div>
                  <div>
                    <strong>{cart.totalPrice.toFixed(2)} VNĐ</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Xác nhận
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
