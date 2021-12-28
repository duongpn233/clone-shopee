import axiosClient from "./axiosClinet";

const searchHistoryApi = {
    getHistory: (params) => {
        const url = '/searchhistory';
        return axiosClient.get(url, { params })
    },
    postHistory: (data) => {
        const url = '/searchhistory';
        return axiosClient.post(url, data)
    }
}

export default searchHistoryApi;