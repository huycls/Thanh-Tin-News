import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Service4Screen(){
    return <div className="main-content">
        <Sidebar />
        <div className="service-detail-page">
         <h1>
            Dịch vụ hỗ trợ online
        </h1>
        <div className="service-detail">
            <img src="./images/30_118.jpg" alt="dich-vu-hieu-chuan" />
            <div className="service-detail-content">
                <strong>Mục tiêu & Lợi ích của khách hàng</strong>
                <ul>
                    <li>Hổ trợ nhanh chóng</li>
                    <li>Tiết kiệm chi phí</li>
                    <li>Tiết kiệm thời gian</li>
                </ul>
                <h3>Một số dịch vụ của chúng tôi</h3>
                <ul>
                    <li>Kiểm tra tình trạng thiết bị</li>
                    <li>Xử lý lỗi phần mềm</li>
                    <li>Chuẩn đoán lỗi phần cứng</li>
                    <li>Upgrade phần mềm</li>
                    <li>Hướng dẫn cài đặt, setup phần mềm</li>
                    <li>Hướng dẫn vận hành thiết bị</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
}