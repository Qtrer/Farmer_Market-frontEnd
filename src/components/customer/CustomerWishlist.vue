<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Wishlist</h1>
    <div style="flex: 1"></div>
    <el-button type="success" @click="addToCart">add to cart</el-button>
  </div>
  <div style="height: 220px">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col v-for="product in productList" :key="product.id" :span="12">
        <el-card class="product-card" @click="toggleWishlistSelected(product.id)" :class="{ selected: product.isSelected }">
          <div style="display: flex">
            <img class="product-img" src="@/assets/logo.png">
            <div class="product-name" style="flex: 1;width: 350px">
              <h3 style="text-align: left; height: 50px; margin-left: 30px; margin-top: 30px">{{ product.name }}</h3>
              <p style="text-align: left; height: 50px; margin-left: 30px">£{{ product.price }}</p>
            </div>
            <div>
              <el-button icon="delete" type="danger" @click.stop style="margin-top: 55px; margin-left: 5px"></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: "CustomerWishlist",
  data() {
    return {
      productList: this.$store.state.products.state.wishlistProduct,
    }
  },
  methods: {
    ...mapMutations(['toggleWishlistSelected']),
    addToCart() {
      this.$router.push('/customer/cart')
    }
  },
  computed: {
    ...mapState(['productList']),
  }
}
</script>

<style scoped>
  .product-card {
    text-align: center;
    justify-content: center;
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