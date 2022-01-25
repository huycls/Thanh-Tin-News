import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Xác nhận thông tin</div>
      <div className={props.step2 ? 'active' : ''}>Nhận email báo giá</div>
    </div>
  );
}
