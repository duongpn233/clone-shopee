import axiosClient from "./axiosClinet";

const addressApi = {
    getProvince: (params)=>{
        const url ='/p';
        return axiosClient.get(url, {
            baseURL: 'https://provinces.open-api.vn/api',
            params: params
        })
    },
    searchProvince: (params)=>{
        const url ='/p/search/';
        return axiosClient.get(url, {
            baseURL: 'https://provinces.open-api.vn/api',
            params: params
        })
    },
    getDistrict: (params, idProvince) => {
        const url = `/p/${idProvince}`;
        return axiosClient.get(url, {
            baseURL: 'https://provinces.open-api.vn/api',
            params: params
        })
    },
    searchDistrict: (params)=>{
        const url ='/d/search/';
        return axiosClient.get(url, {
            baseURL: 'https://provinces.open-api.vn/api',
            params: params
        })
    },
    getWard: (params, idDistrict) => {
        const url = `/d/${idDistrict}`;
        return axiosClient.get(url, {
            baseURL: 'https://provinces.open-api.vn/api',
            params: params
        })
    },
    searchWard: (params)=>{
        const url ='/w/search/';
        return axiosClient.get(url, {
            baseURL: 'https://provinces.open-api.vn/api',
            params: params
        })
    },
}

export default addressApi;