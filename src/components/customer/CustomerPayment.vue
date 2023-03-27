<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Payment</h1>
  </div>
  <div style="height: 0">
    <el-table :data="tableData" :pagination="true">
      <el-table-column prop="productName" label="product"></el-table-column>
      <el-table-column prop="quantity" label="quantity" sortable></el-table-column>
      <el-table-column prop="price" label="price"></el-table-column>
    </el-table>
  </div>
  <div style="display: inline-block">
    <span style="margin: 10px">
      <el-link>
        <el-card class="payment-card">
          <img src="@/assets/logo.png">
          <p style="margin-top: 10px">Paypal</p>
        </el-card>
      </el-link>
    </span>
    <span style="margin: 10px">
      <el-link>
        <el-card class="payment-card">
          <img src="@/assets/logo.png">
          <p style="margin-top: 10px">Strip</p>
        </el-card>
      </el-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "CustomerPayment"
}
</script>

<style scoped>
  .payment-card {
    width: 220px;
    height: 250px;
  }
  .payment-card:hover {
    margin-top: -5px;
  }
  img {
    width: 150px;
    height: 150px;
  }
</style>