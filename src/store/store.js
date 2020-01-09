import Vue from 'vue'; //引入vue
import Vuex from 'vuex'; //引入vuex

Vue.use(Vuex);

//创建Vuex实例
const store = new Vuex.Store({
    state: {
        count: 1
    },
    //类似vue中的computed
    getters: {
        getStateCount(state) {
            return state.count+1;
        }
    },
    mutations: {
        add(state,n) { //上面定义的state对象
            state.count += n;
        },
        reduce(state) {
            state.count -= 3;
        }
    },
    // 注册actions，类似vue里面的methods
    actions: {
        addFun(context,n) {
            context.commit('add',n);
        },
        reduceFun(context) {
            context.commit('reduce');
        }
    }
})

export default store; // 导出store