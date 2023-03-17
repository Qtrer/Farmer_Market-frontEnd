<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">Order</h1>
    <div style="flex: 1">
      <el-input style="width: 500px;padding: 10px;height: 50px" type="text" size="small"></el-input>
      <el-button type="success" icon="search">Search</el-button>
    </div>
  </div>
  <div style="height: 300px">
    <el-table :data="tableData" :pagination="true" :default-sort="{ prop: 'time', order: 'descending' }">
      <el-table-column prop="orderNum" label="orderNum"></el-table-column>
      <el-table-column prop="time" label="time" sortable></el-table-column>
      <el-table-column prop="status" label="status"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CustomerOrder",
  data() {
    return {
      tableData: [
        { orderNum: '1', time: '2023-01-01', status: 'completed' },
        { orderNum: '2', time: '2023-02-01', status: 'delivering' },
        { orderNum: '3', time: '2023-03-01', status: 'ordered' },
        { orderNum: '4', time: '2023-01-22', status: 'refunded' },
      ]
    }
  }
}
</script>

<style scoped>

</style>