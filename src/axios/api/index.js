import Ax from '@/axios/axios';

export default {
    getApi(url){
        return Ax.get(url);
    },
    getApi(url, reqData){
        return Ax.get(url, {params: reqData});
    },
    postApi(url, reqData){
        return Ax.post(url, reqData);
    },
    postApi(url, reqData, header){
        return Ax.post(url, reqData, header);
    },
    putApi(url, reqData){
        return Ax.put(url, reqData);
    },
    deleteApi(url, reqData){
        return Ax.delete(url, {data: reqData});
    },
    downloadApi(url, reqData){
        return Ax.get(url, {params: reqData,responseType: 'blob'});
    },
};