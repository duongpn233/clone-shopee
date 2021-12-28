function validation(values) {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexUserName = /^\w+(\s\w+)*$/;
    let error = {};
    const keyAmount = Object.keys(values).length;

    if (!values.email) {
        error.email = "Trường này là bắt buộc";
    }
    else if (!regexEmail.test(values.email)) {
        error.email = "Trường này phải là email";
    }


    if (!values.password) {
        error.password = "Trường này là bắt buộc";
    }
    else if (values.password.length < 6) {
        error.password = "Nhập tối thiểu sáu kí tự";
    }

    if (keyAmount > 2) {
        if (!values.userName) {
            error.userName = "Trường này là bắt buộc";
        }
        else if (!regexUserName.test(values.userName)) {
            error.userName = "Trường này không được phép có ký tự đặc biệt";
        }
        
        if (!values.passConfirm) {
            error.passConfirm = "Trường này là bắt buộc";
        }
        else if (values.passConfirm !== values.password) {
            error.passConfirm = "Mật khẩu không trùng khớp";
        }
        else if (values.passConfirm.length < 6) {
            error.passConfirm = "Nhập tối thiểu sáu kí tự";
        }
    }

    return error;
}

function blurValidation(name, values, error) {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexUserName = /^\w+(\s\w+)*$/;
    let cloneError = { ...error };
    if (name === 'email') {
        if (!values.email) {
            cloneError.email = "Trường này là bắt buộc";
        }
        else if (!regexEmail.test(values.email)) {
            cloneError.email = "Trường này phải là email";
        }
    }
    else if (name === 'userName') {
        if (!values.userName) {
            cloneError.userName = "Trường này là bắt buộc";
        }
        else if (!regexUserName.test(values.userName)) {
            cloneError.userName = "Trường này không được phép có ký tự đặc biệt";
        }
    }
    else if (name === 'password') {
        if (!values.password) {
            cloneError.password = "Trường này là bắt buộc";
        }
        else if (values.password.length < 6) {
            cloneError.password = "Nhập tối thiểu sáu kí tự";
            if (values.password === values.passConfirm) {
                cloneError.passConfirm = "Nhập tối thiểu sáu kí tự";
            }
        }
        else {
            if (values.password === values.passConfirm && cloneError.passConfirm) {
                delete cloneError.passConfirm;
            }
        }
    }
    else if (name === 'passConfirm') {
        if (!values.passConfirm) {
            cloneError.passConfirm = "Trường này là bắt buộc";
        }
        else if (values.passConfirm !== values.password) {
            cloneError.passConfirm = "Mật khẩu không trùng khớp";
        }
        else if (values.passConfirm.length < 6) {
            cloneError.passConfirm = "Nhập tối thiểu sáu kí tự";
        }
    }

    return cloneError;
}

export default validation;
export { blurValidation };