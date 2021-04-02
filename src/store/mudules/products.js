import axios from 'axios'

const state = {
  products: []
}
const getters = {

}
const actions = {
  async getProducts (store, payload) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    }).catch(e => {
      return Promise.resolve({ data: [] })
    })
    store.commit('setProducts', data)
  }
}
const mutations = {
  setProducts (state, data) {
    state.products = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
