<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Orders</h1>
    <div style="flex: 1"></div>
    <div>
      <el-input style="width: 500px;padding: 10px;height: 50px" type="text" size="small"></el-input>
      <el-button circle type="success" icon="search"></el-button>
    </div>
  </div>
  <div style="height: 300px">
    <el-table :data="orders" style="width: 100%">
      <el-table-column prop="orderId" label="Order ID"></el-table-column>
      <el-table-column prop="customerName" label="Customer Name" ></el-table-column>
      <el-table-column prop="productName" label="Product Name"></el-table-column>
      <el-table-column prop="quantity" label="Quantity" ></el-table-column>
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="orderDate" label="Order Date" ></el-table-column>
      <el-table-column prop="status" label="Status"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "FarmerOrders",
  data() {
    return {
      orders: [
        // Mock data, replace with API response
        {
          orderId: "123456",
          customerName: "John Doe",
          productName: "Apples",
          quantity: 10,
          price: 20,
          orderDate: "2023-03-27",
          status: "Shipped",
        },
        {
          orderId: "789012",
          customerName: "Jane Smith",
          productName: "Pears",
          quantity: 5,
          price: 15,
          orderDate: "2023-03-26",
          status: "Delivered",
        },
      ],
    };
  },
};
</script>

<style>
p {
  height: 30px;
}

.el-form {
  display: inline-block;
  text-align: center;
  vertical-align: center;
  height: 30px;
}
</style>