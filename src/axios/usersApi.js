import axiosClient from "./axiosClinet";

const usersApi = {
    getUser: (params) => {
        const url = '/user/secret';
        return axiosClient.get(url, { params });
    },
    signUp: (data) => {
        const url = '/user/signup';
        return axiosClient.post(url, data);
    },
    signIn: (data) => {
        const url = '/user/signin';
        return axiosClient.post(url, data);
    },
    signUpAndSignInWithGoogle: (data) => {
        const url = '/user/auth/google';
        return axiosClient.post(url, data);
    },
    update: (data) => {
        const url = '/user/update';
        return axiosClient.post(url, data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    },
    getCode: () => {
        const url = '/user/getcode';
        return axiosClient.get(url);
    },
    changePass: (data) => {
        const url = '/user/changepass';
        return axiosClient.post(url, data);
    }
}

export default usersApi;