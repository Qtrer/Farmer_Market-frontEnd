<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Product Name</h1>
  </div>
  <div style="display: flex;height: 350px">
    <div class="product-img">
      <img src="@/assets/logo.png">
    </div>
    <div class="product-info">
      <el-form :model="infoForm" label-width="120px" ref="infoForm">
        <el-form-item label="farmer name: " prop="farmerName">
          <p>{{ infoForm.farmerName }}</p>
        </el-form-item>
        <el-form-item label="price: " prop="price">
          <p>{{ infoForm.price }}</p>
        </el-form-item>
        <el-form-item label="description: " prop="description">
          <p>{{ infoForm.description }}</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div style="display: inline-block; height: 50px">
    <el-button type="warning">add to wishlist</el-button>
    <el-button type="success">add to cart</el-button>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return{
      infoForm:{
        farmerName: '123',
        price: '1',
        description: '1231231231',
      }
    }
  },
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