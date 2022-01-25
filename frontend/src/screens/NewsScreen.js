import React from 'react';
// import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function NewsScreen(props){
    return <div className="main-content">
        <Sidebar />
        <div className="newspage">
        <Helmet>
            <title>CÔNG TY THÀNH TÍN LÀ NHÀ PHÂN PHỐI CHÍNH THỨC CHO DÒNG CÂN ME/TLE/HE CỦA HÃNG METTLER TOLEDO (THỤY SỸ) - Công ty TNHH thiết bị và hóa chất Thành Tín</title>
        </Helmet>
        {/* <div className="news-sidebar">
            <ul>
                <li>
                    <Link to="#"></Link>
                </li>
            </ul>
        </div> */}
        <div className="newspage-content">
            <h1>CÔNG TY THÀNH TÍN LÀ NHÀ PHÂN PHỐI CHÍNH THỨC CHO DÒNG CÂN ME/TLE/HE CỦA HÃNG METTLER TOLEDO (THỤY SỸ)</h1>
            <small>15:11 16-1-2014</small>
            <div className="newspage-content">
                <p>Từ tháng 1 năm 2014, <strong>công ty Thành Tín</strong> chính thức trở thành đại lý phân phối cho dòng cân <strong>ME, TLE, HE</strong> của hãng <strong>Mettler Toledo – Thụy Sỹ</strong> tại thị trường Miền Nam và Miền Trung. Công ty Thành Tín sẽ chịu trách nhiệm về bảo hành, bảo trì & hỗ trợ các đại lý nhằm tăng tối đa sự hài lòng của khách hàng về các sản phẩm của Mettler Toledo.</p>
                <p>Hãng <strong>Mettler Toledo</strong> là nhà sản xuất hàng đầu các dòng cân cao cấp với chất lượng tốt, độ chính xác, độ ổn định và độ bền cao.</p>
                <p>Đây là dòng cân thế hệ mới nhất của <strong>Mettler Toledo</strong> được sản xuất tại nhà máy Trung Quốc, được thiết kế trên nền tảng hiệu quả-thuận tiện-kinh tế. Bao gồm:</p>
                <p>- Cân phân tích 04 số lẻ (chuẩn nội - chuẩn ngoại)</p>
                <p>- Cân phân tích 03 số lẻ (chuẩn nội - chuẩn ngoại)</p>
                <p>- Cân kỹ thuật 02 số lẻ (chuẩn nội - chuẩn ngoại)</p>
                <p>- Cân kỹ thuật 01 số lẻ</p>
                <p>- Cân sấy ẩm (HE)</p>
            </div>
        </div>
    </div>
    </div>
}
export default NewsScreen;