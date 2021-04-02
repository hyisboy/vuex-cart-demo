
const LocalCart = localStorage.getItem('cart');
const isUndef = (val) =>  !val || val === 'undefined' || val === 'null';
const state = {
    cartProducts: isUndef(LocalCart) ? [] : JSON.parse(LocalCart)
}
const getters = {
    // 总价格
    totalPrice (state) {
      return state.cartProducts.reduce((sum,prod) => sum + prod.totalPrice, 0);
    },
    // 总商品数
    totalCount (state) {
      return state.cartProducts.reduce((sum,prod) => sum + prod.count , 0)
    },
    checkedCount(state) {
        return state.cartProducts.reduce((sum,prod) => {
           if(prod.isChecked){
            sum += prod.count
           }
            return sum;
        } , 0)
    },
    checkedPrice(state) {
        return state.cartProducts.reduce((sum,prod) => {
           if(prod.isChecked){
            sum += prod.totalPrice
           }
            return sum;
        } , 0)
    }
}
const actions = {
}
const mutations = {
    addToCart(state,product) {
        // 1. cartProducts 中没有该商品，则直接添加到数组中，并增加 count，isChecked，totalPrice
        // 2. cartProducts 有该商品，让商品的数量加1，选中，计算小计
        // 查找购物车中是否 已存在该商品
        const prod = state.cartProducts.find(item => item.id === product.id);
        if(prod){
            prod.count++;
            prod.isChecked = true;
            prod.totalPrice = prod.count * prod.price;
        }else{
            state.cartProducts.push({
                ...product,
                count: 1, totalPrice: product.price, isChecked: true,
            })
        }
 
     },
     // 根据id删除购物车中的商品
     deleteFormCart(state,productId) {
       const index =  state.cartProducts.findIndex(product => product.id === productId);
       index !== -1 && state.cartProducts.splice(index,1);
     },
     // 设置 全选 状态
     updateAllProductChecked(state,checked) {
         state.cartProducts.forEach(item => item.isChecked = checked);
     },
     // 设置 该商品的 选中状态
     updateProductChecked(state,{checked,productId}) {
        const prod = state.cartProducts.find(prod => prod.id === productId);
        prod && (prod.isChecked = checked);
     },
     // 修改购物车中商品的数量
     updateProduct(state,{id, count}) {
        const prod = state.cartProducts.find(prod => prod.id === id);
        if(prod){
            prod.count = count;
            prod.totalPrice = prod.price * count;
        }
     }
}
export default {
  namespaced: true,
  state,  
  getters,
  actions,
  mutations
}
