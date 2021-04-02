# vuex 购物车 demo

master 分支下为已经实现的代码，empty 分支下为未实现的代码，可以尝试在 empty 分支中进行实现。

## 启动项目
项目启动后可以直接查看
- cd vuex-cart-demo
- yarn 
- node ./server.js // 这里启动一个node服务，提供购物车查询接口
- yarn serve


## 目录结构
``` 
   |--src
       |--views
            |--cart.vue 购物车页面
            |--products.vue 商品列表页面
       |--components
            |--pop-cart.vue 购物车弹出层
   |--server.js node 接口服务  
```   
## 需求
- 商品页面
   - 查询商品列表
   - 将商品添加到购物车
- 我的购物车（弹出层）
   - 查询购物车列表
   - 统计信息
   - 删除商品
- 购物车页面
   - 查询购物车列表
   - 全选&复选
   - 数字文本框（商品数量的更改）
   - 统计信息（注意根据选中项进行变化）
   - 结合本地存储
