
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { signUp, signUpAndSignInWithGoogle } from "../../redux/users/userSlice";
import validation, { blurValidation } from "../../until/validation";

function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [existed, setExisted] = useState(false);
    const [values, setValues] = useState({
        email: "",
        userName: "",
        password: "",
        passConfirm: ""
    });
    const [error, setError] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        let clone = { ...error };
        delete clone[event.target.name];
        setError(clone);
        if (event.target.name === 'email') {
            setExisted(false);
        }
    };
    const handleBlur = (event) => {
        const res = blurValidation(event.target.name, values, error);
        if (res.passConfirm) {

            setError({
                ...error,
                ...res
            });
        }
        else {

            let clone = { ...error };
            delete clone.passConfirm;
            setError({
                ...clone,
                ...res
            });
        }

    };
    const handleSubmit = async () => {
        const res = validation(values);
        if (!Object.keys(res).length) {
            
            const user = {
                email: values.email,
                pass: values.password,
                userName: values.userName
            };
            const res = await dispatch(signUp(user));
            if(res.error){
                setExisted(true);
            }
            else{
                history.goBack();
            }
        }
        setError({ ...res });

    };
    const handleBtnOut = () => {
        history.goBack();
    };
    const handleLogin = (event) => {
        event.preventDefault();
        history.replace("/login")
    };

    const loginGoogleSuccess = async (res) => {
        
        const data = {
            access_token: res.accessToken
        };
        const response = await dispatch(signUpAndSignInWithGoogle(data));
        if(response.error){
            setExisted(true);
        }
        else{
            history.goBack();
        }
    };

    const loginFail = () => {

    };

    const loginFacebookSuccess = (res) => {
        console.log(res)
    }


    return (
        <div className="modal">
            <div className="form form--register">
                <div className="form__container">
                    <div className="form__header">
                        <h3 className="form__heading">Đăng ký</h3>
                        <Link to="/login" className="form__switch_btn form__switch_btn--login" onClick={handleLogin}>Đăng nhập</Link>
                    </div>
                    <div className="form__body">
                        <div className={(error.email || existed) ? "form__input invalid" : "form__input"}>
                            <input type="text" id="email1" name="email" value={values.email} className="form__input-entry_bar"
                                onChange={handleChange} onBlur={handleBlur} placeholder="Nhập gmail của bạn" />
                            <span className="form-message">{error.email ? error.email : ''}</span>
                            <span className="form-message">{existed ? "Tên email đã tồn tại" : ''}</span>
                        </div>
                        <div className={error.userName ? "form__input invalid" : "form__input"}>
                            <input type="text" id="username" name="userName" className="form__input-entry_bar"
                                onChange={handleChange} onBlur={handleBlur} placeholder="Nhập tên người dùng" />
                            <span className="form-message">{error.userName ? error.userName : ''}</span>
                        </div>
                        <div className={error.password ? "form__input invalid" : "form__input"}>
                            <input type="password" id="password1" name="password" value={values.password} className="form__input-entry_bar"
                                onChange={handleChange} onBlur={handleBlur} placeholder="Nhập mật khẩu của bạn" />
                            <span className="form-message">{error.password ? error.password : ''}</span>
                        </div>
                        <div className={error.passConfirm ? "form__input invalid" : "form__input"}>
                            <input type="password" id="password_confirmation" name="passConfirm" value={values.passConfirm} className="form__input-entry_bar"
                                onChange={handleChange} onBlur={handleBlur} placeholder="Nhập lại mật khẩu của bạn" />
                            <span className="form-message">{error.passConfirm ? error.passConfirm : ''}</span>
                        </div>
                    </div>
                    <div className="form__aside">
                        <p className="form__policy">Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                            <a href="true" className="form__policy-link">Điều khoản dịch vụ</a>{'&'}
                            <a href="true" className="form__policy-link">Chính sách bảo mật</a>
                        </p>
                    </div>
                    <div className="form__controls">
                        <button className="form__controls-btn btn btn--outRegister" onClick={handleBtnOut}>TRỞ LẠI</button>
                        <button className="form__controls-btn btn btn--color btn--register" onClick={handleSubmit}>ĐĂNG KÝ</button>
                    </div>
                </div>
                <div className="form__socials">
                    {/* <a href="true" className="form__link form__link--fb">
                        <i className="form__link-icon--fb fab fa-facebook-square" />
                        <span className="form__link-text">Liên kết với Facebook</span>
                    </a> */}
                    {/* <a href="true" className="form__link form__link--gg">
                        <i className="form__link-icon--gg fab fa-google" />
                        <span className="form__link-text">Liên kết với Google</span>
                    </a> */}
                    <FacebookLogin
                        appId={process.env.EACT_APP_FACEBOOK_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={loginFacebookSuccess}
                        cssClass="form__link form__link--fb"
                        icon={<i className="form__link-icon--fb fab fa-facebook-square" />}
                        textButton="Đăng ký với Facebook"
                    />
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Đăng ký với Google"
                        onSuccess={loginGoogleSuccess}
                        onFailure={loginFail}
                        cookiePolicy={'single_host_origin'}
                        className="form__link form__link--gg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Register;