// const state = {

// },

// const mutations = {

// },

const actions = {
    // 请求翻译接口
    getResult: async({},params) => {
        let result = await post('/api/trans/vip/translate',params);
        return result.data;
    }
}

const transModule = {
    namespaced: true,
    // state,
    // mutations,
    actions
}

export default transModule;