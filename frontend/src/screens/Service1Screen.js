import React from 'react';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

export default function Service1Screen(){
    return <div className="main-content">
        <Sidebar />
        <div className="service-detail-page">
        <Helmet>
            <title>Dịch vụ bảo trì | Thành Tín Tech</title>
        </Helmet>
        <h1>
            Dịch vụ bảo trì
        </h1>
        <div className="service-detail">
            <img src="./images/27_118.jpg" alt="dich-vu-bao-tri" />
            <div className="service-detail-content">
                <strong>Mục tiêu & Lợi ích của khách hàng</strong>
                <p>Độ tin cậy về thiết bị đo lường là điều cốt yếu cho các quy trình kiểm soát chất lượng đầu ra và quá trình sản xuất của khách hàng.</p>
                <ul>
                    <li>Tăng độ tin cậy của thiết bị</li>
                    <li>Ngăn ngừa để giảm nguy cơ hỏng hóc bất ngờ.</li>
                    <li>Giảm thiểu thời gian ngừng hoạt động của thiết bị</li>
                    <li>Minh bạch trong bảo trì và báo cáo thiết bị đo lường</li>
                </ul>
                <br />
                <h3>MỘT SỐ DỊCH VỤ BẢO TRÌ CỦA CHÚNG TÔI</h3>
                <strong>Các thiết bị hệ thống nhận bảo dưỡng</strong>
                <ul>
                    <li>-Tất cả thiết bị phòng lab</li>
                    <li>-Tất cả thiết bị đo lường trong sản xuất</li>
                    <li>-Tất cả thiết bị đo online, inline</li>
                </ul>
                <strong>Qui trình bảo dưỡng</strong>
                <p>1. Kiểm tra và chẩn đoán tình trạng thiết bị</p>
                <ul>
                    <li>Kiểm tra trực quan bên ngoài thiết bị bao gồm kiểm ra lắp đặt, hiện trạng kết nối, tín hiệu, nguồn cấp điện của thiết bị đo</li>
                    <li>Chẩn đoán các lỗi và tính trạng hiện tại của thiết bị</li>
                    <li>Cập nhật phần mềm cho thiết bị (nếu cần thiết)</li>
                </ul>
                <p>2. Bảo dưỡng và kiểm tra các thiết bị đo:</p>
                <ul>
                    <li>Vệ sinh thiết bị theo khuyến cáo của nhà sản xuất.</li>
                    <li>Kiểm tra tình trạng thiết bị đo</li>
                    <li>Hiệu chỉnh lại thiết bị nếu có sai số</li>
                    <li>Kiểm tra kết quả đo sau hiệu chỉnh (nếu có).</li>
                </ul>
                <p>3. Thiết lập báo cáo chi tiết, đưa ra các khuyến cáo</p>
            </div>
        </div>
    </div>
    </div>
}