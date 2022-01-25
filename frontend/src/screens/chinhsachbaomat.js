import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function chinhsachbaomat({t}){
    return <div className="main-content">
        <Helmet>
            <title>Chính sách bảo mật</title>
        </Helmet>
        <Sidebar />
        <div className="intro-content intro-page policy">
            <h1><img className="intro-image" src="../images/logofavico.jpg" alt="intro"></img>Chính sách bảo vệ thông tin của người tiêu dùng (điều 68 đến điều 73) của Thành Tín Tech</h1>
            <h2>1.	Mục đích thu thập thông tin cá nhân:</h2>
            <ul>
                <li>- Chúng tôi thu thập, lưu trữ và xử lý thông tin của bạn cho quá trình mua hàng và cho những thông báo sau này liên quan đến đơn hàng, và để cung cấp dịch vụ, bao gồm một số thông tin cá nhân: tên, tên công ty, email, địa chỉ, số điện thoại, chi tiết thanh toán.</li>
            </ul>
            <h2>2.	Phạm vi sử dụng thông tin:</h2>
            <ul>
                <li>- Chúng tôi sẽ dùng thông tin quý khách đã cung cấp để xử lý đơn đặt hàng, cung cấp các dịch vụ và thông tin yêu cầu thông qua website và theo yêu cầu của bạn.</li>
                <li>- Hơn nữa, chúng tôi sẽ sử dụng các thông tin đó để quản lý tài khoản của bạn; xác minh và thực hiện giao dịch, gửi thông tin bao gồm thông tin sản phẩm và dịch vụ. Nếu quý khách không muốn nhận bất cứ thông tin tiếp thị của chúng tôi thì có thể từ chối bất cứ lúc nào.</li>
                <li>- Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của Người Tiêu Dùng hoặc các hoạt động giả mạo Người Tiêu Dùng.</li>
                <li>- Liên lạc và giải quyết khiếu nại với Người Tiêu Dùng.</li>
                <li>- Trong trường hợp có yêu cầu của cơ quan quản lý nhà nước có thẩm quyền.</li>
            </ul>
            <h2>3.	Thời gian lưu trữ thông tin</h2>
            <ul>
                <li>- Không có thời hạn, ngoại trừ trường hợp Người Tiêu Dùng gửi yêu cầu hủy bỏ tới Ban quản trị Công ty </li>
            </ul>
            <h2>4.	Những người hoặc tổ chức có thể tiếp cận với thông tin đó:</h2>
            <p>Người Tiêu Dùng đồng ý rằng, trong trường hợp cần thiết, các cơ quan/ tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của mình, bao gồm:</p>
            <ul>
                <li>- Ban quản trị.</li>
                <li>- Dịch vụ chuyển phát nhanh hoặc nhà cung cấp (chúng tôi có thể chuyển tên và địa chỉ cho bên thứ ba để họ giao hàng cho bạn).</li>
                <li>- Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy định tại quy chế hoạt động.</li>
                <li>- Cố vấn tài chính, pháp lý và Công ty kiểm toán.</li>
                <li>- Bên khiếu nại chứng minh được hành vi vi phạm của Người Tiêu Dùng.</li>
                <li>- Theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
            </ul>
            <h2>5.	Địa chỉ của đơn vị thu thập và quản lý thông tin, bao gồm cách thức liên lạc để người tiêu dùng có thể hỏi về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân mình:</h2>
            <p><strong>Công ty TNHH Thiết Bị Và Hóa Chất Thành Tín</strong></p>
            <ul>
                <li>- <strong>Văn phòng TP.HCM:</strong> 78 đường số 1A, khu phố 4, phường Bình Hưng Hòa B, quận Bình Tân, TPHCM</li>
                <li>- <strong>Văn phòng Hà Nội:</strong> Lô 3, Khu A1-A2-A3, đường Cầu Thanh Trì, phường Cự Khối, quận Long Biên, Hà Nội</li>
                <li><strong>Hotline:</strong> <a href="tel:0988 816 815">0988 816 815</a></li>
                <li><strong>Email:</strong> <a  href="mailto:sales@thanhtin-tech.com">marketing@thanhtin-tech.com</a></li>
                <li><strong>Website:</strong>  <a href="www.thanhtin-tech.com">www.thanhtin-tech.com</a>  hoặc  <a href="www.thanhtintechshop.com">www.thanhtintechshop.com</a></li>
            </ul>
            <h2>6.	Phương thức và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình trên hệ thống thương mại điện tử của đơn vị thu thập thông tin.</h2>
            <ul>
                <li>- Người Tiêu Dùng có quyền yêu cầu kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách yêu cầu Ban quản trị thực hiện việc này.</li>
                <li>- Người Tiêu Dùng có quyền gửi khiếu nại về việc lộ thông tin cá nhân của mình cho bên thứ 3 đến Ban quản trị. </li>
                <li>- Khi tiếp nhận những phản hồi này, Ban quản trị sẽ xác nhận lại thông tin, phải có trách nhiệm trả lời lý do và hướng dẫn Người Tiêu Dùng khôi phục và bảo mật lại thông tin.</li>
            </ul>
            <p>Các hình thức tiếp nhận thông tin khiếu nại của Người Tiêu Dùng:</p>
            <ul>
                <li>a) Qua email: <a  href="mailto:sales@thanhtin-tech.com">marketing@thanhtin-tech.com</a></li>
                <li>b) Qua điện thoại: <a href="tel:0988 816 815">0988 816 815</a></li>
            </ul>
            <p>Lưu ý:</p>
            <p>- Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo.</p>
            <p>- Chính sách này phải được hiển thị rõ ràng cho Người Tiêu Dùng trước hoặc tại thời điểm thu thập thông tin.</p>
        </div>   
    </div>
}
export default  withNamespaces()(chinhsachbaomat);