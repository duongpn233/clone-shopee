import './UserSideBar.css';
function UserSideBar() {
    return (
        <div className="col l-2-4">
            <div className="user-sidebar-info">
                <div className="user-sidebar-avt" style={{ backgroundImage: 'url(/img/unnamed.png)' }}></div>
                <div className="user-sidebar-name-group">
                    <h4 className="user-sidebar-name">Ngoc Duong</h4>
                    <div className="user-sidebar-edit">
                        <span className="user-sidebar-edit-icon">
                            <i className="fas fa-user-edit"></i>
                        </span>
                        <span className="user-sidebar-edit-title">Sửa hồ sơ</span>
                    </div>
                </div>
            </div>
            <div className="user-sidebar-navbar">
                <div className='user-sidebar-acc'>
                    <div className='user-sidebar-acc-icon' style={{ backgroundImage: 'url(https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4)' }}></div>
                    <div className='user-sidebar-acc-wrap'>
                        <h4 className='user-sidebar-acc-title'>Tài khoản của tôi</h4>
                        <div className='user-sidebar-acc-list'>
                            <span className='user-sidebar-acc-profile active'>Hồ sơ</span>
                            <span className='user-sidebar-acc-bank'>Ngân hàng</span>
                            <span className='user-sidebar-acc-address'>Địa chỉ</span>
                            <span className='user-sidebar-acc-pass'>Đổi mật khẩu</span>
                        </div>
                    </div>
                </div>
                <div className='user-sidebar-oder'>
                    <div className='user-sidebar-oder-icon' style={{ backgroundImage: 'url(https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078)' }}></div>
                    <div className='user-sidebar-oder-wrap'>
                        <h4 className='user-sidebar-oder-title'>Đơn mua</h4>
                        <div className='user-sidebar-oder-list'>
                            
                        </div>
                    </div>
                </div>
                <div className='user-sidebar-notifi'>
                    <div className='user-sidebar-notifi-icon' style={{ backgroundImage: 'url(https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c)' }}></div>
                    <div className='user-sidebar-notifi-wrap'>
                        <h4 className='user-sidebar-notifi-title'>Thông báo</h4>
                        <div className='user-sidebar-notifi-list'>
                            
                        </div>
                    </div>
                </div>
                <div className='user-sidebar-voucher'>
                    <div className='user-sidebar-voucher-icon' style={{ backgroundImage: 'url(https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748)' }}></div>
                    <div className='user-sidebar-voucher-wrap'>
                        <h4 className='user-sidebar-voucher-title'>Voucher</h4>
                        <div className='user-sidebar-voucher-list'>
                            
                        </div>
                    </div>
                </div>
                <div className='user-sidebar-coin'>
                    <div className='user-sidebar-coin-icon' style={{ backgroundImage: 'url(https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784)' }}></div>
                    <div className='user-sidebar-coin-wrap'>
                        <h4 className='user-sidebar-coin-title'>Shopee xu</h4>
                        <div className='user-sidebar-coin-list'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSideBar;