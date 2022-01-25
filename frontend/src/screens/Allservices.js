import React from 'react';
// import { withNamespaces } from 'react-i18next';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

export default function Allservices(){
    return <div className="main-content">
        <Helmet>
            <title>Dịch vụ - Công ty TNHH thiết bị và hóa chất Thành Tín</title>
        </Helmet>
        <Sidebar />
        <div className="service-container">
            <div className="service-card">
            <Link to="/dich-vu-bao-tri">
                    <img src="./images/27_118.jpg" alt="dich-vu-bao-tri" />
                    <div className="service-card-content">
                        <h2>Dịch vụ bảo trì</h2>
                        <p>Mục tiêu & Lợi ích của khách hàng Độ tin cậy về thiết bị đo lường là điều cốt yếu cho các quy...</p>
                    </div>
            </Link>
            </div>
            <div className="service-card">
            <Link to="/dich-vu-chuan-doan-va-sua-chua">
                    <img src="./images/28_118.png" alt="dich-vu-chuan-doan-va-sua-chua" />
                    <div className="service-card-content">
                        <h2>Dịch vụ chuẩn đoán và sửa chữa</h2>
                        <p>Mục tiêu Dịch vụ thực hiện chuyên ngành Nhanh chóng giải quyết triệt để Tránh hư hỏng thêm...</p>
                    </div>
            </Link>
            </div>
            <div className="service-card">
            <Link to="/dich-vu-hieu-chuan">
                    <img src="./images/29_118.png" alt="dich-vu-bao-tri" />
                    <div className="service-card-content">
                        <h2>Dịch vụ hiệu chuẩn</h2>
                        <p>Mục tiêu & Lợi ích Cấp giấy chứng nhận hiệu chuẩn Liên kết đúng chuẩn nhà sản xuất Đảm...</p>
                    </div>
            </Link>
            </div>
            <div className="service-card">
            <Link to="/dich-vu-ho-tro-online">
                    <img src="./images/30_118.jpg" alt="dich-vu-bao-tri" />
                    <div className="service-card-content">
                        <h2>Dịch vụ hỗ trợ online</h2>
                        <p>Mục tiêu & Lợi ích của khách hàng Hổ trợ nhanh chóng Tiết kiệm chi phí Tiết kiệm thời gian</p>
                    </div>
            </Link>
            </div>
        </div>
    </div>
}