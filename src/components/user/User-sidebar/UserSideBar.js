import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './UserSideBar.css';
import { setNumberActive } from '../../../redux/extra/extraSlice';
function UserSideBar() {
    const user = useSelector(state => state.user.user);
    const checkActive = useSelector(state => state.extra.active);
    const dispatch = useDispatch();

    const handleCheck = (check) => {
        dispatch(setNumberActive(check));
    };

    useEffect(()=>{

    }, []);

    return (
        <div className="col l-2-4">
            <div className="user-sidebar-info">
                <div className="user-sidebar-avt" style={{ backgroundImage: `url(${user.avtImg ? user.avtImg : '/img/unnamed.png'})` }}></div>
                <div className="user-sidebar-name-group">
                    <h4 className="user-sidebar-name">{user.userName}</h4>
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
                            <Link to='/user/profile' className={`user-sidebar-acc-profile ${checkActive === 1 ? 'active' : ''}`} onClick={()=>{handleCheck(1)}}>Hồ sơ</Link>
                            <Link to='/user/bank' className={`user-sidebar-acc-bank ${checkActive === 2 ? 'active' : ''}`} onClick={()=>{handleCheck(2)}}>Ngân hàng</Link>
                            <Link to='/user/address' className={`user-sidebar-acc-address ${checkActive === 3 ? 'active' : ''}`} onClick={()=>{handleCheck(3)}}>Địa chỉ</Link>
                            <Link to='/user/pass' className={`user-sidebar-acc-pass ${checkActive === 4 ? 'active' : ''}`} onClick={()=>{handleCheck(4)}}>Đổi mật khẩu</Link>
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