<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="cartProducts"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <template v-slot:header>
          <el-checkbox size="mini"
             v-model="checkedAll"
          >
          </el-checkbox>
        </template>
        <template v-slot="scope">
          <el-checkbox
            size="mini"
            :value="scope.row.isChecked"
            @change="updateProductChecked({checked: !scope.row.isChecked,productId: scope.row.id})"
          >
          </el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <template v-slot="{row}">
          <el-input-number size="mini" :min="0" :value="row.count" @change="updateProduct({count: $event,id: row.id})"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="小计">
      </el-table-column>
      <el-table-column
        label="操作">
        <template v-slot='{row}'>
          <el-button @click="deleteFormCart(row.id)" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>{{checkedCount}}</span> 件商品，总价：<span>{{checkedPrice}}</span></p>
      <el-button type="danger">结算</el-button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapState('cart', ['cartProducts']),...mapGetters('cart',['totalCount','totalPrice','checkedCount','checkedPrice']),
    checkedAll: {
      get() {
         const result =   this.cartProducts.length > 0 &&  this.cartProducts.every(prod => prod.isChecked);
         return result
      },
      set(checked) {
         console.log('checked',checked)
         this.updateAllProductChecked(checked);
      }
    }
  },
  methods: {
    ...mapMutations('cart', ['updateAllProductChecked','updateProductChecked','updateProduct'
      ,'deleteFormCart'])
  }
}
</script>

<style></style>
