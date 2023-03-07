<template>
  <div style="height: 50%">
    <el-row>
      <el-col>
        <el-card>
          <div style="display: flex">
            <div><img src="@/assets/left.png" style="width: 20px;height: 20px;margin-top: 150px"></div>
            <div style="flex: 1"><img src="@/assets/logo.png"></div>
            <div><img src="@/assets/right.png" style="width: 20px;height: 20px;margin-top: 150px"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div>
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :span="6">
        <el-card>
          <img class="product-img" src="@/assets/logo.png">
          <p class="product-name">1</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <img class="product-img" src="@/assets/logo.png">
          <p class="product-name">2</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <img class="product-img" src="@/assets/logo.png">
          <p class="product-name">3</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <img class="product-img" src="@/assets/logo.png">
          <p class="product-name">4</p>
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
  .el-card {
    text-align: center;
    justify-content: center;
    height: 350px;
  }
  .product-img {
    max-width: 250px;
    max-height: 250px;
  }
  .product-name {
    margin-top: 20px;
  }
</style>