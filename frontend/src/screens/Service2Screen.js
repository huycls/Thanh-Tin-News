import React from 'react';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

export default function Service2Screen(){
    return <div className="main-content">
        <Sidebar />
        <div className="service-detail-page">
        <Helmet>
            <title>Dịch vụ chuẩn đoán và sửa chữa | Thành Tín Tech</title>
        </Helmet>
         <h1>
            Dịch vụ chuẩn đoán và sửa chữa
        </h1>
        <div className="service-detail">
            <img src="./images/28_118.png" alt="dich-vu-chuan-doan-va-sua-chua" />
            <div className="service-detail-content">
                <strong>Mục tiêu</strong>
                <ul>
                    <li>Dịch vụ thực hiện chuyên ngành
</li>
                    <li>Nhanh chóng giải quyết triệt để
</li>
                    <li>Tránh hư hỏng thêm thiết bị khi dùng tiếp hoặc tạm sửa chữa
</li>
                    <li>Đảm bảo độ chính xác đo sau khi sửa chữa.
</li>
                </ul>
                <strong>Chi tiết dịch vụ</strong>
                <ul>
                    <li>Kiểm tra trực quan bao gồm Kiểm tra lắp đặt, hiện trạng hoạt động thiết bị, nguồn cấp điện của thiết bị đo theo phản hồi của khách hàng.
</li>
                    <li>Chẩn đoán các lỗi và tính trạng hiện tại của thiết bị
</li>
                    <li>Sửa chữa thiết bị dựa trên nguyên nhân gây ra lỗi, thay thế phụ tùng (nếu có)
</li>
                    <li>Vệ sinh thiết bị theo khuyến cáo của nhà sản xuất.
</li>
                    <li>Kiểm tra tình trạng thiết bị đo sau Sửa chữa +hiệu chỉnh lại thiết bị nếu có sai số
</li>
                    <li>Kiểm tra kết quả đo sau hiệu chỉnh
</li>
                    <li>Thiết lập báo cáo chi tiết, đưa ra các khuyến cáo
</li>
                </ul>
                <strong>Cam kết dịch vụ</strong>
                <ul>
                    <li>Luôn thực hiện theo đúng qui chuẩn nhà sản xuất thiết bị
</li>
                    <li>Luôn tuân thủ tiêu chuẩn phép đo và độ chính xác phép đo
</li>
                    <li>Kỹ sư thực hiện được đào tạo từ nhà sản xuất hoặc có kinh nghiệm làm việc nhiều năm trong ngành
</li>
                </ul>
                <strong>Các gói dịch vụ</strong>
                <ul>
                    <li><strong>Thực hiện tại hiện trường (Gói DV1):</strong> đối với thiết bị nặng kích thước to, khó vận chuyển, hoặc hệ thống tích hợp.
</li>
                    <li><strong>Thực hiện tại văn phòng Thành Tín (Gói DV2):</strong> thiết bị nhỏ gọn có thể chuyên chở ô tô, hoặc gửi hàng chuyển phát nhanh (vui lòng khuyến nghị chọn gói này).
</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
}