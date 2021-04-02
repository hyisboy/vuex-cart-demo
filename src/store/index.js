import Vue from 'vue'
import Vuex from 'vuex'
import products from './mudules/products'
import cart from './mudules/cart'
Vue.use(Vuex)

// 在 每次 mutation 之后 将购物车中的数据重新设置
const localStorePlugin = (store) => {
   store.subscribe((mutation,state) => {
       // 购物车 模块的 mutation 都重新设置购物车数据到本地
       if(mutation.type.startsWith('cart/')){
         localStorage.setItem('cart',JSON.stringify(state.cart.cartProducts))
       }
   }) 
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart
  },
  plugins: [localStorePlugin]
})
