import './UserProfile.css'
function UserProfile() {
    return (
        <div className='user-profile'>
            <div className='user-profile-header'>
                <h3 className='user-profile-header-title'>Hồ sơ của tôi</h3>
                <span className='user-profile-header-sub'>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className='user-profile-edit'>
                <div className='user-profile-edit-info'>
                    <div className='user-profile-edit-info-username'>
                        <span className='user-profile-edit-info-username-title'>Tên đăng nhập</span>
                        <span className='user-profile-edit-info-username-value'>Ngoc Duong</span>
                    </div>
                    <div className='user-profile-edit-info-name'>
                        <span className='user-profile-edit-info-name-title'>Tên</span>
                        <div className='user-profile-edit-info-name-wrap'>
                            <input className='user-profile-edit-info-name-value' type='text'></input>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-email'>
                        <span className='user-profile-edit-info-email-title'>Email</span>
                        <div className='user-profile-edit-info-email-wrap'>
                            <span className='user-profile-edit-info-email-value'>...</span>
                            <span className='user-profile-edit-info-email-more'>Thêm</span>
                            <span className='user-profile-edit-info-email-change'>Thay đổi</span>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-phone'>
                        <span className='user-profile-edit-info-phone-title'>Số điện thoại</span>
                        <div className='user-profile-edit-info-phone-wrap'>
                            <span className='user-profile-edit-info-phone-value'>...</span>
                            <span className='user-profile-edit-info-phone-more'>Thêm</span>
                            <span className='user-profile-edit-info-phone-change'>Thay đổi</span>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-shopname'>
                        <span className='user-profile-edit-info-shopname-title'>Tên shop</span>
                        <div className='user-profile-edit-info-shopname-wrap'>
                            <input className='user-profile-edit-info-shopname-value' type='text'></input>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-gender'>
                        <span className='user-profile-edit-info-gender-title'>Giới tính</span>
                        <div className='user-profile-edit-info-gender-wrap'>
                            <div className='user-profile-edit-info-gender-value active'>
                                <div className='user-profile-edit-info-gender-radio'>
                                    <div className='user-profile-edit-info-gender-radio-inner'></div>
                                </div>
                                <span className='user-profile-edit-info-gender-value-text'>Nam</span>
                            </div>
                            <div className='user-profile-edit-info-gender-value'>
                                <div className='user-profile-edit-info-gender-radio'>
                                    <div className='user-profile-edit-info-gender-radio-inner'></div>
                                </div>
                                <span className='user-profile-edit-info-gender-value-text'>Nữ</span>
                            </div>
                            <div className='user-profile-edit-info-gender-value'>
                                <div className='user-profile-edit-info-gender-radio'>
                                    <div className='user-profile-edit-info-gender-radio-inner'></div>
                                </div>
                                <span className='user-profile-edit-info-gender-value-text'>Khác</span>
                            </div>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-dateofbirth'>
                        <span className='user-profile-edit-info-dateofbirth-title'>Ngày sinh</span>
                        <div className='user-profile-edit-info-dateofbirth-wrap'>
                            <div className='user-profile-edit-info-dateofbirth-value-block'>
                                <span className='user-profile-edit-info-dateofbirth-value'>18</span>
                                <span className='user-profile-edit-info-dateofbirth-icon'>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                                <div className='user-profile-edit-info-dateofbirth-list'>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                </div>
                            </div>
                            <div className='user-profile-edit-info-dateofbirth-value-block'>
                                <span className='user-profile-edit-info-dateofbirth-value'>2</span>
                                <span className='user-profile-edit-info-dateofbirth-icon'>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                                <div className='user-profile-edit-info-dateofbirth-list'>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                </div>
                            </div>
                            <div className='user-profile-edit-info-dateofbirth-value-block'>
                                <span className='user-profile-edit-info-dateofbirth-value'>2000</span>
                                <span className='user-profile-edit-info-dateofbirth-icon'>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                                <div className='user-profile-edit-info-dateofbirth-list'>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                    <span className='user-profile-edit-info-dateofbirth-item'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-save'>Lưu</div>
                </div>
                <div className='user-profile-edit-avt'>
                    <div className='user-profile-edit-avt-img-block'>
                        <div className='user-profile-edit-avt-img' style={{ backgroundImage: 'url(/img/unnamed.png)' }}></div>
                    </div>
                    <div className='user-profile-edit-avt-btn-block'>
                        <label className='user-profile-edit-avt-btn' htmlFor='user-profile-edit-avt-file'>Chọn ảnh</label>
                        <input id='user-profile-edit-avt-file' className='user-profile-edit-avt-input' type='file' accept='.jpg,.jpeg,.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;