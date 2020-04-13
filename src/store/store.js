import Vue from 'vue'; //引入vue
import Vuex from 'vuex'; //引入vuex
import transModule from '../view/translate/transModule.js';

Vue.use(Vuex);

const state = {
    count: 1
}
const mutations = {
    add(state,n) {
        state.count += n;
    },
    reduce(state) {
        state.count -= 8;
    }
}
const getters = {
    getStateCount(state) {
        return state.count+1;
    }
}
const actions = {
    addFun(context,n) {
        context.commit('add',n);
    },
    reduceFun(context) {
        context.commit('reduce');
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: transModule
})

export default store; // 导出store