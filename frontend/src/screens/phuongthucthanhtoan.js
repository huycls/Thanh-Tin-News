import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function phuongthucthanhtoan({t}){
    return <div className="main-content">
        <Helmet>
            <title>Phương thức thanh toán</title>
        </Helmet>
        <Sidebar />
        <div className="intro-content intro-page policy">
            <h1><img className="intro-image" src="../images/logofavico.jpg" alt="intro"></img>Phương Thức Thanh Toán</h1>
            <h2>I.	PHƯƠNG THỨC GIAO HÀNG - TRẢ TIỀN MẶT:</h2>
            <p>- Phương thức Giao hàng - Trả tiền mặt chỉ áp dụng đối với những khu vực được hưởng chính xách giao hàng miễn phí, hoặc trường hợp khách hàng mua hàng và thanh toán tiếp tại Công ty TNHH Thành Tín.</p>
            <p>- Với phương thức thanh toán trực tiếp Quý khách có thể đặt hàng trên Website hoặc đặt hàng qua điện thoại (0988 816 815). Nhân viên chúng tôi sẽ tiến hành xuất hàng cho Quý khách và xác nhận ngày giờ giao hàng với Quý khách sau khi xuất hàng.</p>
            <p>- Quý khách có trách nhiệm thanh toán đầy đủ toàn bộ giá trị đơn hàng cho Nhân viên giao nhận hoặc Nhân viên bán hàng và chăm sóc khách hàng của Công ty TNHH Thành Tín ngay khi hoàn tất kiểm tra hàng hóa và nhận Biên bản bản giao, hóa đơn hoặc phiếu thu. Quý khách thanh toán đúng số tiền trên Phiếu đã ghi, nếu có bất cứ thắc mắc nào Quý khách gọi lại cho Công ty TNHH Thành Tín để được thông tin cụ thể hơn.</p>
            <h2>II.	PHƯƠNG THỨC THANH TOÁN TRƯỚC</h2>
            <p>- Chuyển tiền, chuyển khoản, thanh toán trực tiếp bằng tiền mặt hoặc qua thẻ tại các hệ thống ngân hàng hoặc văn phòng của Công ty TNHH Thành Tín.</p>
            <p>- Áp dụng cho mọi đơn hàng có giá trị lớn hơn 20.000.000 đồng. Các bước tiến hành như sau:</p>
            <ul>
                <li>1. Đến Ngân hàng gần nơi ở của Quý khách nhất để chuyển tiền/chuyển khoản theo thông tin chi tiết Công ty TNHH Thành Tín cung cấp: Số tiền, Tên đơn vị, số tài khoản, Ngân hàng mở tài khoản, nội dụng chuyển tiền/chuyển khoản.</li>
                <li>2. Thông báo cho Công ty TNHH Thành Tín Tech (bằng điện thoại, email, SMS, fax, ...) khi Quý khách đã thực hiện chuyển tiền/chuyển khoản.</li>
                <li>3. Hoặc Quý khách vui lòng liên hệ với Bộ phận Bán hàng trực tuyến của Công ty TNHH Thành Tín Tech theo số hotline 0988 816 815 (từ 8h00 đến 17h00 hàng ngày), để thông báo đã chuyển tiền.</li>
                <li>4. Ngay khi nhận được báo cáo xác nhận từ Ngân hàng, Công ty TNHH Thành Tín sẽ tiến hành thông báo lại cho Quý khách đồng thời xuất hàng giao hàng cho Quý khách trong thời gian quy định trong mục Chính sách vận chuyển.</li>
            </ul>
            <p>- Công ty TNHH Thành Tín sẽ không chịu trách nhiệm về sai sót trong quá trình chuyển khoản hoặc chuyển khoản sai thông tin, Quý khách phải làm việc với Ngân hàng để được xử lý ổn thỏa, chỉ khi nào tiền được chuyển đến tài khoản của Công ty TNHH Thành Tín, chúng tôi sẽ xác nhận với Quý khách. Trong một số tình huống Quý khách có thể nhờ phía Ngân hàng mà Quý khách thực hiện giao dịch hoặc Ngân hàng của Công ty TNHH Thành Tín sử dụng để kiểm tra đối chứng cần thiết.</p>
            <h2>III.	PHƯƠNG THỨC THANH TOÁN SAU.</h2>
            <p>Quý khách vui lòng liên hệ với nhân viên kinh doanh của chúng tôi để được hướng dẫn thêm.</p>
        </div>   
    </div>
}
export default  withNamespaces()(phuongthucthanhtoan);