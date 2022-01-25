// import Axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import {
//   ORDER_DELIVER_RESET,
//   ORDER_PAY_RESET,
// } from '../constants/orderConstants';

// export default function OrderScreen(props) {
//   const orderId = props.match.params.id;
//   const [sdkReady, setSdkReady] = useState(false);
//   const orderDetails = useSelector((state) => state.orderDetails);
//   const { order, loading, error } = orderDetails;
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;

//   const orderPay = useSelector((state) => state.orderPay);
//   const {
//     loading: loadingPay,
//     error: errorPay,
//     success: successPay,
//   } = orderPay;
//   const orderDeliver = useSelector((state) => state.orderDeliver);
//   const {
//     loading: loadingDeliver,
//     error: errorDeliver,
//     success: successDeliver,
//   } = orderDeliver;
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const addPayPalScript = async () => {
//       const { data } = await Axios.get('/api/config/paypal');
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
//       script.async = true;
//       script.onload = () => {
//         setSdkReady(true);
//       };
//       document.body.appendChild(script);
//     };
//     if (
//       !order ||
//       successPay ||
//       successDeliver ||
//       (order && order._id !== orderId)
//     ) {
//       dispatch({ type: ORDER_PAY_RESET });
//       dispatch({ type: ORDER_DELIVER_RESET });
//       dispatch(detailsOrder(orderId));
//     } else {
//       if (!order.isPaid) {
//         if (!window.paypal) {
//           addPayPalScript();
//         } else {
//           setSdkReady(true);
//         }
//       }
//     }
//   }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);

//   const successPaymentHandler = (paymentResult) => {
//     dispatch(payOrder(order, paymentResult));
//   };
//   const deliverHandler = () => {
//     dispatch(deliverOrder(order._id));
//   };

//   return loading ? (
//     <LoadingBox></LoadingBox>
//   ) : error ? (
//     <MessageBox variant="danger">{error}</MessageBox>
//   ) : (
//     <div>
//       <h1>Order {order._id}</h1>
//       <div className="row top orderscreen-detail">
//         <div className="col-2 row">
//           <ul className="rowe">
//             <li>
//               <div className="card card-body">
//                 <h2>Thông tin</h2>
//                 <p>
//                   <strong>Tên:</strong> {order.shippingAddress.fullName} <br />
//                   <strong>Địa chỉ: </strong> {order.shippingAddress.address},
//                   {order.shippingAddress.company},{' '}
//                   {order.shippingAddress.city} <br />
//                   <strong>Email:</strong> {order.shippingAddress.email} <br />
//                   <strong>SDT:</strong> {order.shippingAddress.phonenumber} <br />
          
//                 </p>
//                 {order.isDelivered ? (
//                   <MessageBox variant="success">
//                     Delivered at {order.deliveredAt}
//                   </MessageBox>
//                 ) : (
//                   <MessageBox variant="danger">Not Delivered</MessageBox>
//                 )}
//               </div>
//             </li>
           
//             <li>
//               <div className="card card-body">
//                 <h2>Sản phẩm đã chọn</h2>
//                 <ul>
//                   {order.orderItems.map((item) => (
//                     <li key={item.product}>
//                       <div className="row">
//                         <div>
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="small"
//                           ></img>
//                         </div>
//                         <div >
//                           <Link to={`/product/${item.product}`}>
//                             {item.name}
//                           </Link>
//                         </div>

//                         <div>
//                           {item.qty} x ${item.price} = ${item.qty * item.price}
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className="col-1">
//           <div className="card card-body">
//             <ul>
//               <li>
//                 <h2>Tóm tắt đơn hàng</h2>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Sản phẩm</div>
//                   <div>${order.itemsPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Shipping</div>
//                   <div>${order.shippingPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Thuế</div>
//                   <div>${order.taxPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>
//                     <strong> Tổng cộng</strong>
//                   </div>
//                   <div>
//                     <strong>${order.totalPrice.toFixed(2)}</strong>
//                   </div>
//                 </div>
//               </li>
//               {/* {!order.isPaid && (
//                 <li>
//                   {!sdkReady ? (
//                     <LoadingBox></LoadingBox>
//                   ) : (
//                     <>
//                       {errorPay && (
//                         <MessageBox variant="danger">{errorPay}</MessageBox>
//                       )}
//                       {loadingPay && <LoadingBox></LoadingBox>}

//                       <PayPalButton
//                         amount={order.totalPrice}
//                         onSuccess={successPaymentHandler}
//                       ></PayPalButton>
//                     </>
//                   )}
//                 </li>
//               )} */}
//               {/* {!order.isDelivered && (
//                 <li>
//                   {loadingDeliver && <LoadingBox></LoadingBox>}
//                   {errorDeliver && (
//                     <MessageBox variant="danger">{errorDeliver}</MessageBox>
//                   )}
//                   <button
//                     type="button"
//                     className="primary block"
//                     onClick={deliverHandler}
//                   >
//                     Deliver Order
//                   </button>
//                 </li>
//               )} */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
