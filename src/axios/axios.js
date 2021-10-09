'use strict';
import axios from 'axios';
axios.defaults.withCredentials=true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.interceptors.request.use(config => {
    console.log("request");
    return config;
});


axios.interceptors.response.use(res => {
    console.log(res);

    return res;
});


export default axios;
