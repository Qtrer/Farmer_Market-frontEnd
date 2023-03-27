<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Cart</h1>
    <div style="flex: 1"></div>
    <div style="margin-top: 5px;margin-right: 20px">count: £{{ num }}</div>
    <el-button type="success" @click="goToPayment">go to payment</el-button>
  </div>
  <div style="height: 220px">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col v-for="product in productList" :key="product.id" :span="18">
        <el-card class="product-card" @click="clickCard(product.id)" :class="{ selected: product.isSelected }">
          <div style="display: flex">
            <img class="product-img" src="@/assets/logo.png">
            <div class="product-name" style="flex: 1;width: 700px">
              <h3 style="text-align: left; height: 50px; margin-left: 30px; margin-top: 30px">{{ product.name }}</h3>
              <p style="text-align: left; height: 50px; margin-left: 30px">£{{ product.price }}</p>
            </div>
            <div style="display: inline-block; margin-top: 60px">
              <el-button circle icon="minus" size="small" @click.stop="minusNum(product.id)"></el-button>
              <span style="margin-left: 10px; margin-right: 10px">{{ product.num }}</span>
              <el-button circle icon="plus" size="small" @click.stop="addNum(product.id)"></el-button>
            </div>
            <div>
              <el-button type="warning" @click.stop style="margin-top: 55px; margin-left: 5px">buy later</el-button>
              <el-button icon="minus" type="danger" @click.stop style="margin-top: 55px; margin-left: 5px">delete</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import productList from "@/store/productList";
export default {
  name: "CustomerCart",
  data() {
    return {
      productList: this.$store.state.productList.state.cartProduct,
      num: 0,
    }
  },
  methods: {
    ...mapMutations(['toggleCartSelected']),
    clickCard(id) {
      this.toggleCartSelected(id)
      this.sumCount()
    },
    sumCount() {
      let total = 0
      for (let product in productList){
        if (product.isSelected){
          let count = product.num * product.price
          total += count
        }
      }
      this.num += total
    },
    addNum(id) {
      const product = this.$store.state.productList.getters.getCartById(id)
      product.num ++
    },
    minusNum(id) {
      const product = this.$store.state.productList.getters.getCartById(id)
      if (product.num > 1) {
        product.num --
      }
    },
    goToPayment() {
      this.$router.push('/customer/payment')
    }
  },
  computed: {
    ...mapState(['productList']),
  },
}
</script>

<style scoped>
  .product-card {
    text-align: center;
    justify-content: center;
    width: 1000px;
    height: 200px;
    display: flex;
  }
  .product-card:hover {
    margin-top: -5px;
  }
  .product-card.selected {
    border-color: green;
  }
  .product-img {
    max-width: 150px;
    max-height: 150px;
  }
  .product-name {
    margin-top: 10px;
  }
</style>