import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../redux/users/userSlice";

function Navbar({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logOut());
        if(window.location.pathname === '/cart'){
            history.replace('/login');
        }
    }

    if (user) {
        return (
            <nav className="navbar hide-on-mobile-tablet">
                <ul className="list">
                    <li className="list__item list__item--hasqr list__item--separate">
                        Vào cửa hàng trên ứng dụng web shop
                        <div className="list__qr">
                            <img src="/img/qrcode.png" alt="" className="list__qr-code" />
                            <div className="list__qr-app">
                                <a href="https://play.google.com/store/apps/details?id=com.shopee.vn&hl=vi&gl=US" className="list__qr-download">
                                    <img src="/img/ggplay.png" alt="" className="list__qr-app-link" />
                                </a>
                                <a href="https://apps.apple.com/vn/app/id959841449" className="list__qr-download">
                                    <img src="/img/appstore.png" alt="" className="list__qr-app-link" />
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="list__item">
                        <span className="list__item--nopointer">Kết nối</span>
                        <a href="https://www.facebook.com/ShopeeVN" className="list__item-icon">
                            <i className="list__item-strongicon fab fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/shopee_vn/" className="list__item-icon">
                            <i className="list__item-strongicon fab fa-instagram" />
                        </a>
                    </li>
                </ul>
                <ul className="list">
                    <li className="list__item list__item--has_notify">
                        <a href="true" className="list__link">
                            <i className="list__item-strongicon fas fa-bell" />
                            Thông báo
                        </a>
                        <div className="list__notify">
                            <header className="list__notify-head">
                                <h3>Thông báo mới nhất</h3>
                            </header>
                            <ul className="list__notify-list">
                                <li className="list__notify-item">
                                    <a href="true" className="list__notify-link">
                                        <img src="https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png" alt="" className="list__notify-img" />
                                        <div className="list__notify-info">
                                            <span className="list__notify-link-info">Chương trình khách hàng thân
                                                thiết</span>
                                            <span className="list__notify-link-describe">Để tri ân các khách hàng yêu
                                                thích chúng tôi nên CHHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT được ra
                                                đời</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list__notify-item">
                                    <a href="true" className="list__notify-link">
                                        <img src="https://img.abaha.vn/photos/resized/200x120/83-1618807421-myphamohui-lgvina.png" alt="" className="list__notify-img" />
                                        <div className="list__notify-info">
                                            <span className="list__notify-link-info">Công bố sản phẩm mới OHUI tháng 1
                                                năm 2021</span>
                                            <span className="list__notify-link-describe" />
                                        </div>
                                    </a>
                                </li>
                                <li className="list__notify-item">
                                    <a href="true" className="list__notify-link list__notify-item--viewed">
                                        <img src="https://img.abaha.vn/photos/resized/200x120/83-1589289429-myphamohui-lgvina.png" alt="" className="list__notify-img" />
                                        <div className="list__notify-info">
                                            <span className="list__notify-link-info">Chương trình khuyến mãi chào tháng
                                                5</span>
                                            <span className="list__notify-link-describe">Khuyến mãi chào hè!</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list__notify-item">
                                    <a href="true" className="list__notify-link list__notify-item--viewed">
                                        <img src="https://img.abaha.vn/photos/resized/200x120/83-1589349012-myphamohui-lgvina.png" alt="" className="list__notify-img" />
                                        <div className="list__notify-info">
                                            <span className="list__notify-link-info">Mini-game chơi ngay rinh quà liền
                                                tay</span>
                                            <span className="list__notify-link-describe">Mini-game</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list__notify-item">
                                    <a href="true" className="list__notify-link">
                                        <img src="https://img.abaha.vn/photos/resized/200x120/83-1589963137-myphamohui-lgvina.png" alt="" className="list__notify-img" />
                                        <div className="list__notify-info">
                                            <span className="list__notify-link-info">Khởi đầu của làn da khoẻ đẹp</span>
                                            <span className="list__notify-link-describe">Ohui Prime Advancer</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <footer className="list__notify-footer">
                                <a href="true" className="list__notify-btn">Xem tất cả</a>
                            </footer>
                        </div>
                    </li>
                    <li className="list__item">
                        <a href="true" className="list__link">
                            <i className="list__item-strongicon fas fa-question-circle" />
                            Trợ giúp
                        </a>
                    </li>

                    <div className="list__item-login-wrap">
                        <Link to="/register" className={`list__item list__item--strong list__item--register list__item--separate ${user.userName ? 'hide' : ''}`}>Đăng kí
                        </Link>
                        <Link to="/login" className={`list__item list__item--strong list__item--login ${user.userName ? 'hide' : ''}`}>Đăng nhập</Link>
                        <li className={`list__item list__item-user ${user.userName ? '' : 'hide'}`}>
                            <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                                alt="" className="list__item-img" />
                            <span className="list__item-name">{user.userName}</span>
                            <ul className="list__item-menu">
                                <li className="list__item-menu-optional">
                                    <a href="true">Tài khoản của tôi</a>
                                </li>
                                <li className="list__item-menu-optional">
                                    <a href="true">Đơn mua</a>
                                </li>
                                <li className="list__item-menu-optional list__item-menu--logout" onClick={handleLogout}>
                                    <li className="">Đăng xuất</li>
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
        )
    }
    else{
        return false;
    }
}
export default Navbar;