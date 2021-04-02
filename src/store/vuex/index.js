
let _Vue = null;

class Store  {
    constructor(options ) {
       const {state = {}, mutations = {}, actions = {},getters={}} = options;
       if(!_Vue){
           console.error('you have to execute first install !!')
       }
       this.state = _Vue.abserveable(state);
       this.getters = Object.create(null);
       Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, {
                get() {
                    return getters[key](this.state);
                }
            })
       })
       this.mutations = mutations;
       this.actions = actions;
    }
    commit(type, payload) {
       this.mutations[type](this.state,payload);
    }
    dispath(type,payload) {
      this.actions[type](this,payload);
    }
}
function install (Vue) {
    _Vue = Vue;
    Vue.mixin({
        beforeCreate() {
            // 在创建 vue 对象时 将 将 store 实例挂载到 options 上
            if(this.$options.store){
                _Vue.prototype.$store = this.$options.store;
            }
        }
    })
}
export default {
    Store, install
}
