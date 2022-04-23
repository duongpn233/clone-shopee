import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    if (localStorage.getItem('token')) {
        const tokenReq = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        config.headers.Authorization = tokenReq;
    }
    // Handle token here ...
    return config;
})
axiosClient.interceptors.response.use((response) => {
    // if (response && response.data) {
    //     return response.data;
    // }
    return response;
}, (error) => {
    console.log(error.response)
    // Handle errors
    if (error.response.status === 403) {
        throw new Error('Email already exists');
    }
    else if (error.response.data.error.message === 'correct account or password'){
        throw new Error('Correct account or password');
    }
    else if (error.response.data.error.message === "OTP timeout"){
        throw new Error("OTP timeout");
    }
    else if (error.response.data.error.message === "OTP code is incorrect"){
        throw new Error("OTP code is incorrect");
    }
    else if (error.response.data.error.message === "Login account is google account"){
        throw new Error("Login account is google account");
    }
    else if (error.response.data.error.message === 'Login session has expired'){
        throw new Error('Login session has expired');
    }
    else {
        throw error;
    }
});
export default axiosClient;