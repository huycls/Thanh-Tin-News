import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function chinhsachbaohanh({t}){
    return <div className="main-content">
        <Helmet>
            <title>Chính sách bảo hành</title>
        </Helmet>
        <Sidebar />
        <div className="intro-content intro-page policy">
            <h1><img className="intro-image" src="../images/logofavico.jpg" alt="intro"></img>Chính Sách Bảo Hành</h1>
            <p>Thiết bị sau khi đã nhận bàn giao, nghiệm thu nếu gặp bất kỳ trục trặc nào hoặc có vấn đề gì liên quan đến việc sử dụng, vận hành của thiết bị, khách hàng có thể liên lạc trực tiếp với Bộ phận dịch vụ kỹ thuật của Công ty TNHH Thiết Bị Và Hóa Chất Thành Tín hoặc nhận viên bán hàng để nhận được chăm sóc từ và hỗ trợ từ các dịch vụ sau bán hàng của công ty chúng tôi.</p>
            <h2>I/ Những trường hợp được bảo hành miễn phí:</h2>
            <p><strong>Bảo hành sản phẩm được hiểu là:</strong> sửa chữa, khắc phục sự cố kỹ thuật cho những lỗi xảy ra có nguyên nhân bắt nguồn từ Hãng sản xuất.</p>
            <p>- Sản phẩm được bảo hành miễn phí nếu sản phẩm đó còn thời hạn bảo hành tính từ ngày bàn giao hoặc nghiệm thu. Trừ các trước hợp quy định khác với phụ kiện và hàng hóa tiêu hao.</p>
            <p>- Thời hạn bảo hành được ghi trên Phiếu Bảo Hành, hoặc điều khoản của hợp đồng, báo giá và theo quy định của từng Hãng sản xuất.</p>
            <p>- Có Phiếu bảo hành và Tem bảo hành của Hãng sản xuất trên sản phẩm.</p>
            <p>- Sản phẩm bảo hành sẽ tuân theo qui định bảo hành của từng Hãng sản xuất đối với các sự cố về mặt kỹ thuật.</p>
            <p>- Địa điểm bảo hành: Tất cả các sản phẩm được bảo hành tại bộ phận dịch vụ kỹ thuật Thanh Tin Tech  tại Hà Nội và TP HCM.</p>
            <p><strong>Những trường hợp được bảo hành tại địa điểm điểm sử dụng:</strong></p>
            <p>Những thiết bị được cung cấp theo hợp đồng hoặc đơn hàng hay báo giá kèm theo điều khoản quy định rõ địa điểm bảo hành tại địa điểm lắp đặt, sử dụng hay địa chỉ của khách hàng; Kỹ thuật viên của Thanh Tin Tech trực tiếp khắc phục sự cố tại địa điểm của khách hàng, trong trường hợp không khắc phục được tại chỗ, Thanh Tin Tech sẽ có trách nhiệm mang sản phẩm về để sửa chữa hoặc gửi sang hãng sản suất để bảo hành và trả sản phẩm trả về cho quý khách. </p>
            <p>Những sản phẩm không thuộc qui định được bảo hành tại tại địa chỉ của khách hàng, Quý khách vui lòng mang sản phẩm đến Bộ phận hỗ trợ kỹ thuật của Thanh Tin Tech để được phục vụ nhanh nhất.</p>
            <p><strong>Chi phí vận chuyển khi bảo hành:</strong></p>
            <p>Đối với những yêu cầu bảo cho thiết bị thuộc diện được bảo hành tại địa chỉ của khách hàng, Thanh Tin Tech sẽ miễn phí chi phí vận chuyển hàng và giao hàng.</p>
            <p>Đối với những yêu cầu bảo hành không thuộc diện được bảo hành tại địa chỉ của khách hàng, Quý khách vui lòng:</p>
            <p>- Liên lạc trực tiếp với Bộ phận hỗ trợ kỹ thuật của Thanh Tin Tech để thông báo và được hướng dẫn.</p>
            <p>- Gửi sản phẩm đến Bộ phận hỗ trợ kỹ thuậtcủa Thanh Tin Tech. Quý khách tự chịu chi phí chuyển hàng.</p>
            <h2>II/ Những trường hợp sau đây sẽ không được bảo hành (sửa chữa có tính phí):</h2>
            <p>- Những sản phẩm không thể xác định được nguồn gốc mua tại Thanh Tin Tech, thì Thanh Tin Tech có quyền từ chối bảo hành.</p>
            <p>- Sản phẩm đã quá thời hạn ghi trên Phiếu bảo hành hoặc mất Phiếu bảo hành.</p>
            <p>- Phiếu bảo hành,Tem bảo hành bị rách, không còn Tem bảo hành, Tem bảo hành dán đè hoặc bị sửa đổi.</p>
            <p>- Phiếu bảo hành không ghi rõ số Serial và ngày mua hàng.</p>
            <p>- Số Serial trên máy và Phiếu bảo hành không trùng khớp nhau hoặc không xác định được vì bất kỳ lý do nào.</p>
            <p>- Sản phẩm bị hư hỏng do tác động cơ học làm rơi, vỡ, va đập, trầy xước, móp méo, ẩm ướt, hoen rỉ, chảy nước hoặc do hỏa hoạn, thiên tai gây nên.</p>
            <p>- Sản phẩm có dấu hiệu hư hỏng do chuột bọ hoặc côn trùng xâm nhập.</p>
            <p>- Sản phẩm bị hư hỏng do sử dụng không đúng sách hướng dẫn, sử dụng sai điện áp quy định.</p>
            <p>- Các loại phụ kiện kèm theo như là hàng hóa tiêu hao, dụng cụ thủy tinh,…</p>
            <p>- Các dữ liệu, tài liệu, văn bản và phần mềm cung cấp miễn phí, lưu trữ kèm theo sản phẩm (kể cả trong thời gian gửi bảo hành).</p>
            <p>- Tự ý tháo dỡ, sửa chữa bởi các cá nhân hoặc Kỹ thuật viên không được sự ủy quyền của Thanh Tin Tech.</p>
            <h2>III// Liên hệ, thắc mắc, khiếu nại về vấn đề bảo hành:</h2>
            <p>Nếu Quý khách chưa thấy hài lòng hoặc có thắc mắc khiếu nại gì về vấn đề bảo hành, xin Quý khách vui lòng liên hệ:</p>
            <p><strong>Bộ phân Hỗ trợ Kỹ thuật – Thanh Tin Tech</strong></p>
            <p>HCM: service@thanhtin-tech.com </p>
            <p>Hà Nội: service@thanhtin-tech.com</p>
            <p>Văn phòng HCM: 78 đường số 1A, khu phố 4, phường Bình Hưng Hòa B, quận Bình Tân, TPHCM</p>
            <p>Điện thoại: (028) 36 360 901    Fax: (028) 36 360 902</p>
            <p>Văn phòng Hà Nội: Lô 3, Khu A1-A2-A3, đường Cầu Thanh Trì, phường Cự Khối, quận Long Biên, Hà Nội</p>
            <p>MST: 0311941553 -001    Email: hanoi@thanhtin-tech.com</p>
        </div>   
    </div>
}
export default  withNamespaces()(chinhsachbaohanh);