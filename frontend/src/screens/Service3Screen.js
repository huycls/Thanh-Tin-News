import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Service3Screen(){
    return <div className="main-content">
        <Sidebar />
        <div className="service-detail-page">
         <h1>
            Dịch vụ hiệu chuẩn
        </h1>
        <div className="service-detail">
            <img src="./images/29_118.png" alt="dich-vu-hieu-chuan" />
            <div className="service-detail-content">
                <strong>Mục tiêu & Lợi ích</strong>
                <ul>
                    <li>Cấp giấy chứng nhận hiệu chuẩn</li>
                    <li>Liên kết đúng chuẩn nhà sản xuất</li>
                    <li>Đảm bảo phù hợp qui chuẩn trung tâm thứ 3</li>
                </ul>
                <strong>Lĩnh vực chuyên môn</strong>
                <ul>
                <li>Các thiết bị đo lường lĩnh vực giấy, bao bì giấy</li>
                <li>Các thiết bị đo lường lĩnh vực nhựa, bao bì nhựa, cao su</li>
                <li>Các lĩnh vực liên quan đến chỉ tiêu đo lường trên</li>
                <li>Lĩnh vực giấy, bao bì giấy</li>
                <li>Lĩnh vực nhựa (ống nhựa) , bao bình nhựa</li>
                </ul>
                <h4>Năng lực hiệu chuẩn</h4>
                <img src="./images/dv2.png" alt="dich-vu-hieu-chuan"/>            
                <img src="./images/dv3.png"  alt="dich-vu-hieu-chuan"/>
                <img src="./images/dich_vu_6.png"  alt="dich-vu-hieu-chuan"/>
            </div>
        </div>
    </div>
    </div>
}