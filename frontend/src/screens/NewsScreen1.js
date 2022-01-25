import React from 'react';
// import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';


function NewsScreen1(props){
    return <div className="main-content">
        <Sidebar />
        <div className="newspage">
    <Helmet>
        <title>THÔNG BÁO THAY ĐỔI TÊN GIAO DỊCH - Công ty TNHH thiết bị và hóa chất Thành Tín</title>
    </Helmet>
        <div className="newspage-content">
            <h1>THÔNG BÁO THAY ĐỔI TÊN GIAO DỊCH</h1>
            <p>Thông báo thay đổi tên giao dịch: Kể từ ngày 29/07/13 Công ty TNHH TM DV XD Kỹ Thuật Thành Tín sẽ thay bằng tên Công ty TNHH Thiết Bị và Hóa Chất Thành Tín. Xin thông báo đến Quý khách hàng cũng như các đơn vị có giao dịch với công ty được rỏ.
            Ngoài ra, Công ty Thành Tín sẽ chính thức đầu tư kinh doanh thêm vào mặt hàng phụ gia, hóa chất công nghiệp và hóa chất thí nghiệm để ngày càng phục vụ tốt hơn cho khách hàng trong cùng lĩnh vực ngành nghề kinh doanh.
            (Theo GPKD được cấp lại lần 2 vào ngày 29/07/2013 của Sở Kế Hoạch và Đầu Tư Tp.HCM).</p>
        </div>
    </div>
    </div>
}
export default NewsScreen1;