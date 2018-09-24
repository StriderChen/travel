import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
    state,
    mutations,
    actions: {
        /*changeCity (ctx, city) {
            ctx.commit('changeCity', city)
        }*/
    },
    //getters 属性有点类似于computed,用于计算某些数据,避免数据冗余
    getters:{
        doubleCity : (state) => {
            return state.city + state.city
        }
    }
})
