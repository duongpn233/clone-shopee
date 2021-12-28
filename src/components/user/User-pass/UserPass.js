import './UserPass.css';
function UserPass() {
    return (
        <div className='user-pass'>
            <div className='user-pass-header'>
                <h3 className='user-pass-header-title'>Đổi mật khẩu</h3>
                <span className='user-pass-header-sub'>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
            </div>
            <div className='user-pass-container'>
                <div className='user-pass-newpass-group error'>
                    <div className='user-pass-newpass'>
                        <span className='user-pass-newpass-title'>Mật khẩu mới</span>
                        <div className='user-pass-newpass-input-group'>
                            <input className='user-pass-newpass-input' type='password'></input>
                        </div>
                    </div>
                    <div className='user-pass-newpass-mess-group'>
                        <span className='user-pass-newpass-space'></span>
                        <span className='user-pass-newpass-mess'>Nhập tối thiểu 8 kí tự</span>
                    </div>
                </div>
                <div className='user-pass-passconfirm-group'>
                    <div className='user-pass-passconfirm'>
                        <span className='user-pass-passconfirm-title'>Xác nhận mật khẩu</span>
                        <div className='user-pass-passconfirm-input-group'>
                            <input className='user-pass-passconfirm-input' type='password'></input>
                        </div>
                    </div>
                    <div className='user-pass-passconfirm-mess-group'>
                        <span className='user-pass-passconfirm-space'></span>
                        <span className='user-pass-passconfirm-mess'>Nhập tối thiểu 8 kí tự</span>
                    </div>
                </div>
                <div className='user-pass-code-group'>
                    <div className='user-pass-code'>
                        <span className='user-pass-code-title'>Mã xác minh</span>
                        <div className='user-pass-code-input-group'>
                            <div className='user-pass-code-input-wrap'>
                                <input className='user-pass-code-input' type='text'></input>
                                <div className='user-pass-code-btn'>Gửi mã xác minh</div>
                            </div>
                        </div>
                    </div>
                    <div className='user-pass-code-mess-group'>
                        <span className='user-pass-code-space'></span>
                        <span className='user-pass-code-mess'>Mã xác nhận không chính xác</span>
                    </div>
                </div>
                <div className='user-pass-send-btn'>Xác nhận</div>
            </div>
        </div>
    )
}

export default UserPass;