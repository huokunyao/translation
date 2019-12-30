import axios from 'axios';
import { isJson, urlParams } from './../util/core.js';
import router from './../router/index.js';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        if(isJson(config.data)) {
            config.data = urlParams(config.data);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)
// post请求
// export function post(url,params) {
//     return axios.post(url,params);
// }
// get请求
// export function get(url,params) {
//     return axios.get(url,params);
// }