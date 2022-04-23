import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePass, getCode } from '../../../redux/users/userSlice';
import { blurChangePass, validationChangePass } from '../../../until/validation';
import './UserPass.css';
function UserPass() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        pass: "",
        passConfirm: "",
        OTP: ""
    });
    const [errors, setErrors] = useState({});
    const [errFromSv, setErrFromSv] = useState();

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        let clone = { ...errors };
        delete clone[event.target.name];
        if (event.target.name === "OTP") {
            setErrFromSv('');
        }
        setErrors(clone);
    };

    const handleBlur = (event) => {
        const res = blurChangePass(event.target.name, values, errors)
        setErrors({ ...res });
    }

    const handleSubmit = async () => {
        const res = validationChangePass(values);
        const data = {
            pass: values.pass,
            OTP: values.OTP
        };
        if (!Object.keys(res).length && data.OTP) {
            const dataRes = await dispatch(changePass(data));
            if (dataRes.error) {
                setErrFromSv(dataRes.error.message);
            }
            else {
                alert("Đã đổi mật khẩu thành công!")
            }
        }
        setErrors({ ...res });
    };

    const handleGetCode = async () => {
        const res = await dispatch(getCode());
        if (res.error) {
            setErrFromSv(res.error.message);
        }
    }

    return (
        <div className='user-pass'>
            <div className='user-pass-header'>
                <h3 className='user-pass-header-title'>Đổi mật khẩu</h3>
                <span className='user-pass-header-sub'>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
            </div>
            <div className='user-pass-container'>
                <div className={`user-pass-newpass-group ${errors.pass ? 'error' : ''}`}>
                    <div className='user-pass-newpass'>
                        <span className='user-pass-newpass-title'>Mật khẩu mới</span>
                        <div className='user-pass-newpass-input-group'>
                            <input className='user-pass-newpass-input' type='password' value={values.pass} name="pass" onChange={handleChange} onBlur={handleBlur}></input>
                        </div>
                    </div>
                    <div className='user-pass-newpass-mess-group'>
                        <span className='user-pass-newpass-space'></span>
                        <span className='user-pass-newpass-mess'>{errors.pass ? errors.pass : ''}</span>
                    </div>
                </div>
                <div className={`user-pass-passconfirm-group ${errors.passConfirm ? 'error' : ''}`}>
                    <div className='user-pass-passconfirm'>
                        <span className='user-pass-passconfirm-title'>Xác nhận mật khẩu</span>
                        <div className='user-pass-passconfirm-input-group'>
                            <input className='user-pass-passconfirm-input' type='password' value={values.passConfirm} name="passConfirm" onChange={handleChange} onBlur={handleBlur}></input>
                        </div>
                    </div>
                    <div className='user-pass-passconfirm-mess-group'>
                        <span className='user-pass-passconfirm-space'></span>
                        <span className='user-pass-passconfirm-mess'>{errors.passConfirm ? errors.passConfirm : ''}</span>
                    </div>
                </div>
                <div className={`user-pass-code-group ${errors.OTP || errFromSv ? 'error' : ''}`}>
                    <div className='user-pass-code'>
                        <span className='user-pass-code-title'>Mã xác minh</span>
                        <div className='user-pass-code-input-group'>
                            <div className='user-pass-code-input-wrap'>
                                <input className='user-pass-code-input' type='text' value={values.OTP} name="OTP" onChange={handleChange} onBlur={handleBlur}></input>
                                <div className='user-pass-code-btn' onClick={handleGetCode}>Gửi mã xác minh</div>
                            </div>
                        </div>
                    </div>
                    <div className='user-pass-code-mess-group'>
                        <span className='user-pass-code-space'></span>
                        <span className='user-pass-code-mess'>{errFromSv || errors.OTP ? errFromSv || errors.OTP : ''}</span>
                    </div>
                </div>
                <div className='user-pass-send-btn' onClick={handleSubmit}>Xác nhận</div>
            </div>
        </div>
    )
}

export default UserPass;