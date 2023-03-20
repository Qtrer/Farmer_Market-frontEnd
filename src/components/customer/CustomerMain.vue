<template>
  <div style="height: 400px">
    <el-row>
      <el-col>
        <el-card style="height: 350px">
          <div style="display: flex">
            <div style="margin-top: 125px">
              <el-button type="success" circle icon="arrow-left"></el-button>
            </div>
            <div style="flex: 1"><img src="@/assets/logo.png"></div>
            <div style="margin-top: 125px">
              <el-button type="success" circle icon="arrow-right"></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div style="height: 270px">
    <el-row v-for="row in 3" :key="row" :gutter="10" type="flex" justify="center">
      <el-col v-for="col in 6" :key="col" :span="4">
        <el-card class="product-card">
          <img class="product-img" src="@/assets/logo.png">
          <div class="product-name">
            <p style="height: 30px">name</p>
            <p style="height: 30px">price</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CustomerMain",

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
  .product-img {
    max-width: 150px;
    max-height: 150px;
  }
  .product-name {
    margin-top: 10px;
  }
</style>