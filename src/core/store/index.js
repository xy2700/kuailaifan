// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import { joinSafe } from 'upath';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    foodlist: [],
    totals:0
  },
  mutations: {
    add: (state, data) => {
      var bln = true
      var tol=0
      if (state.foodlist.length != 0) {
        state.foodlist.forEach((item, index) => {
          if (data.id == item.id) {
            item.num++;  
            bln = false
          }
          tol+=item.price*item.num
        })
      }
      if (bln) {
        data.num = 1;
        state.foodlist.push(data)
        state.foodlist.forEach((item, index) => {
            tol+=item.price*item.num
        })
      }
      state.totals=tol
    },
    jie(state, data) {
      var tol=0
      state.foodlist.forEach((item, index) => {
        if (item.id == data) {
          item.num--
        }
        tol+=item.price*item.num
      })
      state.totals=tol
    }
  }
})

export default store
