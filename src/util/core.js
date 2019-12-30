import qs from 'qs';

// 判断对象是否是json格式
export function isJson(obj) {
    var isjson = typeof(obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

// 参数序列化
export function urlParams(params) {
    return qs.stringify(params);
}
