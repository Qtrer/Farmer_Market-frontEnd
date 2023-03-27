<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">{{ product.name }}</h1>
  </div>
  <div style="display: flex;height: 350px">
    <div class="product-img">
      <img src="@/assets/logo.png">
    </div>
    <div class="product-info">
      <el-form :model="product" label-width="120px" ref="infoForm">
        <el-form-item label="farmer name: " prop="farmerName">
          <p>{{ product.farmerName }}</p>
        </el-form-item>
        <el-form-item label="price: " prop="price">
          <p>{{ product.price }}</p>
        </el-form-item>
        <el-form-item label="description: " prop="description">
          <p>{{ product.description }}</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div style="display: inline-block; height: 50px">
    <el-button type="warning" @click="addToWishlist(product.id)">add to wishlist</el-button>
    <el-button type="success" @click="addToCart(product.id)">add to cart</el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "ProductDetail",
  data() {
    return{
      product: this.$store.getters.getProductById(parseInt(this.$route.params.id)),
    }
  },
  methods: {
    ...mapMutations(['addWishlist']),
    ...mapMutations(['addCart']),
    addToWishlist(id) {
      this.addWishlist(id)
      this.$router.push({name: 'customerWishlist'})
    },
    addToCart(id) {
      this.addCart(id)
      this.$router.push({name: 'customerCart'})
    }
  }
}
</script>

<style scoped>
  .product-img {
    margin-left: 50px;
    margin-top: 10px;
    width: 300px;
    height: 300px;
  }
  .product-info {
    flex: 1;
    margin-left: 50px;
    margin-top: 50px;
  }
  .el-form {
    display: inline-block;
    text-align: center;
    vertical-align: center;
    height: 30px;
  }
</style>