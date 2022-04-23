import './UserProfile.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../../redux/users/userSlice";
import { useHistory } from 'react-router-dom';

function UserProfile() {
    const user = useSelector(state => state.user.user);
    const [userName, setUserName] = useState('');
    const [sex, setSex] = useState('');
    const [dateOfBirth, setDateofBirth] = useState({
        day: null,
        month: null,
        year: null
    });
    const [avtImg, setAvtImg] = useState('');
    const [fileAvt, setFileAvt] = useState();
    const [checkDay, setCheckDay] = useState(false);
    const [checkMonth, setCheckMonth] = useState(false);
    const [checkYear, setCheckYear] = useState(false);
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const years = [];
    for (let i = 1980; i <= 2010; i++) {
        years.push(i);
    }
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleSex = (checkSex) => {
        setSex(checkSex);
    };

    const handleDateOfBirth = (check, data) => {
        const newData = {
            ...dateOfBirth,
            [check]: data
        };
        setDateofBirth(newData);
    };

    const handleCheckDay = () => {
        setCheckDay(!checkDay);
        setCheckMonth(false);
        setCheckYear(false);
    };
    const handleCheckMonth = () => {
        setCheckMonth(!checkMonth);
        setCheckDay(false);
        setCheckYear(false);
    };
    const handleCheckYear = () => {
        setCheckYear(!checkYear);
        setCheckDay(false);
        setCheckMonth(false);
    };
    const handleBlurDay = () => {
        console.log(1)
        setCheckDay(false);
    };
    const handleBlurMonth = () => {
        setCheckMonth(false);
    };
    const handleBlurYear = () => {
        setCheckYear(false);
    }

    const handleAvt = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                setAvtImg(event.target.result);
            };
            reader.readAsDataURL(file);
            setFileAvt(file);
        }
    };

    const handleSave = () => {
        const formData = new FormData();
        const data = {
            day: dateOfBirth.day,
            month: dateOfBirth.month,
            year: dateOfBirth.year
        };
        const dataJson = JSON.stringify(data);
        formData.append('avtImg', fileAvt);
        formData.append('userName', userName);
        formData.append('sex', sex);
        formData.append('dateOfBirth', dataJson);
        dispatch(updateUser(formData));
    }

    useEffect(async () => {
        if (localStorage.getItem('token')) {
            const data = await dispatch(getUser());
            setUserName(data.payload.userName);
            setSex(data.payload.sex);
            setDateofBirth({ ...data.payload.dateOfBirth });
            setAvtImg(data.payload.avtImg);
        }
        else {
            history.replace('/home');
        }
    }, [])

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
                        <span className='user-profile-edit-info-username-value'>{user.userName}</span>
                    </div>
                    <div className='user-profile-edit-info-name'>
                        <span className='user-profile-edit-info-name-title'>Tên</span>
                        <div className='user-profile-edit-info-name-wrap'>
                            <input className='user-profile-edit-info-name-value' value={userName} onChange={handleUserName} type='text'></input>
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
                            <div className={`user-profile-edit-info-gender-value ${sex === 'male' ? 'active' : ''}`} onClick={() => { handleSex('male') }}>
                                <div className='user-profile-edit-info-gender-radio'>
                                    <div className='user-profile-edit-info-gender-radio-inner'></div>
                                </div>
                                <span className='user-profile-edit-info-gender-value-text'>Nam</span>
                            </div>
                            <div className={`user-profile-edit-info-gender-value ${sex === 'female' ? 'active' : ''}`} onClick={() => { handleSex('female') }}>
                                <div className='user-profile-edit-info-gender-radio'>
                                    <div className='user-profile-edit-info-gender-radio-inner'></div>
                                </div>
                                <span className='user-profile-edit-info-gender-value-text'>Nữ</span>
                            </div>
                            <div className={`user-profile-edit-info-gender-value ${sex === 'other' ? 'active' : ''}`} onClick={() => { handleSex('other') }}>
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
                            <div className={`user-profile-edit-info-dateofbirth-value-block ${checkDay ? 'active' : ''}`} onClick={handleCheckDay} onBlur={handleBlurDay}>
                                <span className='user-profile-edit-info-dateofbirth-value'>{dateOfBirth.day}</span>
                                <span className='user-profile-edit-info-dateofbirth-icon'>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                                <div className='user-profile-edit-info-dateofbirth-list'>
                                    {
                                        days.map((day, index) => {
                                            return (
                                                <span className='user-profile-edit-info-dateofbirth-item' key={index} onClick={() => { handleDateOfBirth('day', day) }}>{day}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={`user-profile-edit-info-dateofbirth-value-block ${checkMonth ? 'active' : ''}`} onClick={handleCheckMonth} onBlur={handleBlurMonth}>
                                <span className='user-profile-edit-info-dateofbirth-value'>{dateOfBirth.month}</span>
                                <span className='user-profile-edit-info-dateofbirth-icon'>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                                <div className='user-profile-edit-info-dateofbirth-list'>
                                    {
                                        months.map((month, index) => {
                                            return (
                                                <span className='user-profile-edit-info-dateofbirth-item' key={index} onClick={() => { handleDateOfBirth('month', month) }}>{month}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={`user-profile-edit-info-dateofbirth-value-block ${checkYear ? 'active' : ''}`} onClick={handleCheckYear} onBlur={handleBlurYear}>
                                <span className='user-profile-edit-info-dateofbirth-value'>{dateOfBirth.year}</span>
                                <span className='user-profile-edit-info-dateofbirth-icon'>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                                <div className='user-profile-edit-info-dateofbirth-list'>
                                    {
                                        years.map((year, index) => {
                                            return (
                                                <span className='user-profile-edit-info-dateofbirth-item' key={index} onClick={() => { handleDateOfBirth('year', year) }}>{year}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user-profile-edit-info-save' onClick={handleSave}>Lưu</div>
                </div>
                <div className='user-profile-edit-avt'>
                    <div className='user-profile-edit-avt-img-block'>
                        <div className='user-profile-edit-avt-img' style={{ backgroundImage: `url(${avtImg ? avtImg : '/img/unnamed.png'})` }}></div>
                    </div>
                    <div className='user-profile-edit-avt-btn-block'>
                        <label className='user-profile-edit-avt-btn' htmlFor='user-profile-edit-avt-file'>Chọn ảnh</label>
                        <input id='user-profile-edit-avt-file' className='user-profile-edit-avt-input' type='file' accept='.jpg,.jpeg,.png' onChange={handleAvt} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;