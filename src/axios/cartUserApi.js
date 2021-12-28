import axiosClient from "./axiosClinet";

const cartUserApi = {
    getCartUser: () => {
        const url = '/cart/user';
        return axiosClient.get(url)
    },
    postCart: (data) => {
        const url = '/cart';
        return axiosClient.post(url, data)
    },
    deleteCartUser: (id) => {
        const url = `/cart/${id}`;
        return axiosClient.delete(url)
    }
}

export default cartUserApi;