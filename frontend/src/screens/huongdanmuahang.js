import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function huongdanmuahang({t}){
    return <div className="main-content">
        <Helmet>
            <title>Hướng dẫn mua hàng</title>
        </Helmet>
        <Sidebar />
        <div className="intro-content intro-page policy">
            <h1><img className="intro-image" src="../images/logofavico.jpg" alt="intro"></img>Hướng dẫn mua hàng</h1>
            <h2>HƯỚNG DẪN MUA HÀNG TẠI WEBSITE CÔNG TY TNHH THÀNH TÍN</h2>
            <p>Để thuận tiện trong việc chọn mua các sản phẩm của công ty TNHH Thành Tín, quý khách có thể chọn những phương thức mua hàng dưới đây:</p>
            <h4>1.	Gọi đến tới số hotline: 0988 816 815:</h4>
            <p>Thời gian vào tất cả các ngày trong tuần (trừ CN, ngày Tết, Lễ)</p>
            <p>- Buổi sáng: 8h – 12h</p>
            <p>- Buổi chiều: 13h – 17h</p>
            <h4>2.	Đến đặt hàng tại 1 trong các văn phòng của công ty:</h4>
            <p>- <strong>Văn phòng HCM:</strong> 78 đường số 1A, khu phố 4, phường Bình Hưng Hòa B, quận Bình Tân, TPHCM</p>
            <p>- <strong>Văn phòng Hà Nội:</strong> Lô 3, Khu A1-A2-A3, đường Cầu Thanh Trì, phường Cự Khối, quận Long Biên, Hà Nội</p>
            <p>Thời gian từ 8h đến 17h các ngày trong tuần (trừ CN, ngày Tết, Lễ)</p>
            <h4>3.	Mua hàng tại website www.thanhtintechshop.com để được nhanh chóng và tiện lợi hơn (quý khách không cần đăng nhập/đăng ký tài khoản khi thực hiện mua hàng):</h4>
            <p>Quý khách thực hiện theo các bước sau:</p>
            <p><strong>Bước 1: Lựa chọn hàng hóa</strong></p>
            <ul>
                <li>- Danh mục các sản phẩm được phân loại theo chức năng từng nhóm . Ví dụ: Thiết bị ngành giấy, Lò nung…Quý khách click chọn món hàng cần tìm</li>
                <li>- Muốn xem thông tin chi tiết từng sản phẩm, Quý khách click vào khung sản phẩm hoặc ảnh, ngay lập tức thông tin về sản phẩm sẽ được hiển thị đầy đủ. Đồng thời, Quý khách cũng có thể phóng to hình ảnh bằng cách click chuột vào hình ảnh của sản phẩm, lúc này hình ảnh lớn hơn của sản phẩm sẽ được hiển thị.</li>
                <li>- Ngoài ra, nếu Quý khách đã có tên hoặc mã sản phẩm, có thể sử dụng công cụ Tìm kiếm rất tiện lợi và nhanh chóng. Quý khách chỉ cần gõ tên (có dấu) hoặc mã sản phẩm vào Box Tìm kiếm ở phía trên thanh menu chính (hoặc biểu tượng Tìm kiếm trên các thiết bị di động, máy tính bảng), sau đó click vào nút Tìm kiếm, website sẽ liệt kê các kết quả tìm kiếm.</li>
                <li>- Sau khi đã tìm được sản phẩm ưng ý, Quý khách tiến hành chọn số lượng sản phẩm cần đặt và click vào nút Thêm vào giỏ hàng, sản phẩm sẽ được thêm vào giỏ hàng hiện tại của Quý khách, đồng thời hiển thị số lượng sản phẩm ở biểu tượng giỏ hàng nằm góc trên bên phải màn hình; Quý khách có thể kiểm tra thông tin đơn hàng khi click vào biểu tượng giỏ hàng ở góc trên bên phải màn hình, ở đây Quý khách có thể sửa, xóa sản phẩm đã thêm vào trước đó.</li>
                <li>- Để tiếp tục xem hàng, Quý khách nhấn vào Logo trang web hoặc nút Trang chủ nằm ở menu chính của trang.</li>
                <li>- Sau khi chọn được sản phẩm vừa ý, Quý khách click vào biểu tượng giỏ hàng, sau đó nhấn nút Xác nhận để chuyến đến trang điền thông tin, ở đây quý khách điền đầy đủ thông tin đã liệt kê trong biểu mẫu và nhấn nút xác nhận. </li>
                <li>- Khi nhận được đơn hàng, nhân viên của chúng tôi sẽ gửi báo giá cho khách hàng thông qua email và liên lạc trực tiếp để xác nhận việc nhận được thông tin đơn hàng từ Quý khách, đồng ý hay từ chối đơn hàng của Quý khách (vui lòng cho biết lý do từ chối).</li>
                <li>- Thủ tục thanh toán: Quý khách hàng có thể lựa chọn 01 trong các hình thức thanh toán thuận lợi và nhanh chóng nhất cho Quý khách hàng và thông báo cho chúng tôi về việc thanh toán này.</li>
                <li>- Ngay sau khi nhận được điện chuyển tiền, uỷ nhiệm chi, chúng tôi tiến hành giao hàng cho Quý khách tại các văn phòng của Công ty TNHH Thành Tín</li>
                <li>- Đối với những đơn hàng phải gửi qua bên trung gian vận chuyển, chúng tôi tiến hành đóng dấu, niêm phong toàn bộ gói hàng để Quý khách hoàn toàn yên tâm rằng gói hàng không bị thay đổi nội dung khi vận chuyển.</li>
                <li>- Chúng tôi sẽ thông báo cho Quý khách thời gian dự kiến hàng được chuyển tới, như vậy Quý khách hàng yên tâm rằng gói hàng đã được giao và chuẩn bị, thu xếp nhận hàng.</li>
                <li>- Ngay khi nhận hàng từ người chuyển phát hàng, Quý khách hàng vui lòng trực tiếp kiểm tra kỹ hàng hoá, nếu phát sinh các vấn đề liên quan đến chủng loại, chất lượng, số lượng hàng hoá không đúng như trong đơn đặt hàng hay niêm phong bị thay đổi, Quý khách hãy lập biên bản khi nhận hàng với đơn vị hoặc người chuyển phát và thông báo ngay cho Công ty TNHH Thành Tín để cùng phối hợp xử lý. Trong trường hợp như vậy, Quý khách không phải chịu bất kỳ trách nhiệm nào liên quan tới việc hàng hoá bị thay đổi, thất lạc, không đảm bảo về chất lượng và số lượng trong quá trình vận chuyển hàng hoá tới địa chỉ của khách hàng.</li>
            </ul>
            <p><strong>Khi cần biết thêm thông tin chi tiết hoặc có yêu cầu khác, Quý khách hãy liên hệ ngay với chúng tôi qua hotline: 0988 816 815</strong></p>
            <p><strong>Hân hạnh được phục vụ quý khách!</strong></p>
        </div>   
    </div>
}
export default  withNamespaces()(huongdanmuahang);