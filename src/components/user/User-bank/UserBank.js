import './UserBank.css';
function UserBank() {
    return (
        <div className="user-bank">
            <div className="user-bank-account">
                <div className='user-bank-header'>
                    <h3 className='user-bank-header-title'>Tài khoản ngân hàng</h3>
                    <div className='user-bank-header-add'>Thêm tài khoản ngân hàng</div>
                </div>
                <div className='user-bank-account-contain'>
                    <div className='user-bank-account-item default'>
                        <div className='user-bank-account-item-img-wrap'>
                            <div className='user-bank-account-item-img' style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/illustration-bank-grey-icon-107597893.jpg)' }}></div>
                        </div>
                        <div className='user-bank-account-item-info'>
                            <div className='user-bank-account-item-name-group'>
                                <h4 className='user-bank-account-item-name'>VIETTIN BANK</h4>
                                <span className='user-bank-account-item-default'>Mặc định</span>
                            </div>
                            <div className='user-bank-account-item-user'>
                                <span className='user-bank-account-item-user-title'>Họ và tên</span>
                                <span className='user-bank-account-item-user-name'>Pham Ngoc Duong</span>
                            </div>
                            <div className='user-bank-account-item-area'>
                                <span className='user-bank-account-item-area-title'>Khu vực</span>
                                <span className='user-bank-account-item-area-value'>Ha Noi</span>
                            </div>
                            <div className='user-bank-account-item-branch'>
                                <span className='user-bank-account-item-branch-title'>Chi nhánh</span>
                                <span className='user-bank-account-item-branch-value'>Ha Noi</span>
                            </div>
                        </div>
                        <span className='user-bank-account-item-no'>***0768</span>
                        <div className='user-bank-account-item-delete'>Xoá</div>
                        <div className='user-bank-account-item-establish'>Thiết lập mặc định</div>
                    </div>
                    <div className='user-bank-account-item'>
                        <div className='user-bank-account-item-img-wrap'>
                            <div className='user-bank-account-item-img' style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/illustration-bank-grey-icon-107597893.jpg)' }}></div>
                        </div>
                        <div className='user-bank-account-item-info'>
                            <div className='user-bank-account-item-name-group'>
                                <h4 className='user-bank-account-item-name'>VIETTIN BANK</h4>
                                <span className='user-bank-account-item-default'>Mặc định</span>
                            </div>
                            <div className='user-bank-account-item-user'>
                                <span className='user-bank-account-item-user-title'>Họ và tên</span>
                                <span className='user-bank-account-item-user-name'>Pham Ngoc Duong</span>
                            </div>
                            <div className='user-bank-account-item-area'>
                                <span className='user-bank-account-item-area-title'>Khu vực</span>
                                <span className='user-bank-account-item-area-value'>Ha Noi</span>
                            </div>
                            <div className='user-bank-account-item-branch'>
                                <span className='user-bank-account-item-branch-title'>Chi nhánh</span>
                                <span className='user-bank-account-item-branch-value'>Ha Noi</span>
                            </div>
                        </div>
                        <span className='user-bank-account-item-no'>***0768</span>
                        <div className='user-bank-account-item-delete'>Xoá</div>
                        <div className='user-bank-account-item-establish'>Thiết lập mặc định</div>
                    </div>
                </div>
            </div>
            <div className="user-bank-credit">
                <div className='user-bank-header'>
                    <h3 className='user-bank-header-title'>Thẻ tín dụng</h3>
                    <div className='user-bank-header-add'>Thêm thẻ mới</div>
                </div>
                <div className='user-bank-credit-contain'>
                    <h3 className='user-bank-credit-mess'>Bạn chưa liên kết thẻ</h3>
                </div>
            </div>
        </div>
    )
}

export default UserBank;