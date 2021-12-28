import axiosClient from "./axiosClinet";
const shopApi = {
    getShops: (params)=>{
        const url ='/shop';
        return axiosClient.get(url, {params})
    }
}

export default shopApi;