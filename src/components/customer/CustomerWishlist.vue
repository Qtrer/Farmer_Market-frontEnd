<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Wishlist</h1>
    <div style="flex: 1"></div>
    <el-button type="success">add to cart</el-button>
  </div>
  <div style="height: 300px">
    <el-row v-for="row in 3" :key="row" :gutter="10" type="flex" justify="center">
      <el-col v-for="col in 6" :key="col" :span="4">
        <el-card class="product-card" @click="handleCardClick" :class="cardClasses">
          <img class="product-img" src="@/assets/logo.png">
          <div class="product-name">
            <p style="height: 30px">name</p>
            <p style="height: 30px">price</p>
          </div>
        </el-card>
        <el-button icon="minus" style="margin-top: 5px">delete</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CustomerWishlist",
  data() {
    return {
      num:Math.random(),
      isActive: false
    }
  },
  methods: {
    handleCardClick() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    cardClasses() {
      return {
        'is-active': this.isActive
      };
    }
  }
}
</script>

<style scoped>
.product-card {
  text-align: center;
  justify-content: center;
  height: 250px;
}
.product-card:hover {
  margin-top: -10px;
}
.product-card.is-active {
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