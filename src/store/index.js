import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{//state
        dialog: {
            show:false,
        }
    },
    getters:{
        not_show(state){//这里的state对应着上面这个state
            return !state.dialog.show;
        }
    },
    mutations:{
        switch_dialog(state){//这里的state对应着上面这个state
            debugger;
            state.dialog.show = state.dialog.show?false:true;
            //你还可以在这里执行其他的操作改变state
        },
        switch_dialog(state){//这里的state对应着上面这个state
            debugger;
            state.show = state.show?false:true;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions:{
        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
            debugger;
            context.commit('switch_dialog');
            //你还可以在这里触发其他的mutations方法
        },
    }
})