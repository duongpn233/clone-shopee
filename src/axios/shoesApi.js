import axiosClient from "./axiosClinet";

const shoesApi = {
    getShoes: (params)=>{
        const url ='/shoes';
        return axiosClient.get(url, {params})
    }
}

export default shoesApi;