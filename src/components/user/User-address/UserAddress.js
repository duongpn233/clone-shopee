import './UserAddress.css';
function UserAddress() {
    return (
        <div className='user-address'>
            <div className='user-address-header'>
                <h3 className='user-address-header-title'>Địa chỉ của tôi</h3>
                <div className='user-address-header-add'>Thêm địa chỉ mới</div>
            </div>
            <div className='user-address-container'>
                <div className='user-address-group default'>
                    <div className='user-address-info'>
                        <div className='user-address-info-name'>
                            <span className='user-address-info-name-title'>Họ và tên</span>
                            <div className='user-address-info-name-value-wrap'>
                                <span className='user-address-info-name-value'>Pham Ngoc Duong</span>
                                <span className='user-address-info-name-default'>Mặc định</span>
                            </div>
                        </div>
                        <div className='user-address-info-phone'>
                            <span className='user-address-info-phone-title'>Số điện thoại</span>
                            <span className='user-address-info-phone-value'>(+84) 376476112</span>
                        </div>
                        <div className='user-address-info-addr'>
                            <span className='user-address-info-addr-title'>Địa chỉ</span>
                            <div className='user-address-info-addr-group'>
                                <span className='user-address-info-addr-housenumber'>Nhà C9</span>
                                <span className='user-address-info-addr-ward'>Phường Phương Liệt</span>
                                <span className='user-address-info-addr-district'>Quận Thanh Xuân</span>
                                <span className='user-address-info-addr-province'>Hà Nội</span>
                            </div>
                        </div>
                    </div>
                    <div className='user-address-operation'>
                        <div className='user-address-operation-block'>
                            <div className='user-address-operation-edit'>Sửa</div>
                            <div className='user-address-operation-delete'>Xoá</div>
                        </div>
                        <div className='user-address-operation-set-wrap'>
                            <div className='user-address-operation-set'>Thiết lập mặc định</div>
                        </div>
                    </div>
                </div>
                <div className='user-address-group'>
                    <div className='user-address-info'>
                        <div className='user-address-info-name'>
                            <span className='user-address-info-name-title'>Họ và tên</span>
                            <div className='user-address-info-name-value-wrap'>
                                <span className='user-address-info-name-value'>Pham Ngoc Duong</span>
                                <span className='user-address-info-name-default'>Mặc định</span>
                            </div>
                        </div>
                        <div className='user-address-info-phone'>
                            <span className='user-address-info-phone-title'>Số điện thoại</span>
                            <span className='user-address-info-phone-value'>(+84) 376476112</span>
                        </div>
                        <div className='user-address-info-addr'>
                            <span className='user-address-info-addr-title'>Địa chỉ</span>
                            <div className='user-address-info-addr-group'>
                                <span className='user-address-info-addr-housenumber'>Nhà C9</span>
                                <span className='user-address-info-addr-ward'>Phường Phương Liệt</span>
                                <span className='user-address-info-addr-district'>Quận Thanh Xuân</span>
                                <span className='user-address-info-addr-province'>Hà Nội</span>
                            </div>
                        </div>
                    </div>
                    <div className='user-address-operation'>
                        <div className='user-address-operation-block'>
                            <div className='user-address-operation-edit'>Sửa</div>
                            <div className='user-address-operation-delete'>Xoá</div>
                        </div>
                        <div className='user-address-operation-set-wrap'>
                            <div className='user-address-operation-set'>Thiết lập mặc định</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAddress;