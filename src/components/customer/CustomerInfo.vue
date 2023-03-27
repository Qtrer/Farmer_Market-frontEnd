<template>
  <div style="height: 50px">
    <h1 style="text-align:left;margin: 10px">Info Management</h1>
  </div>
  <div style="height: 300px">
    <el-form :model="user" label-width="100px" ref="infoForm">
      <el-form-item label="username: " prop="username">
        <p>{{ user.username }}</p>
      </el-form-item>
      <el-form-item label="email: " prop="email">
        <p>{{ user.email }}</p>
      </el-form-item>
      <el-form-item label="password: " prop="password">
        <p>{{ user.password }}</p>
      </el-form-item>
      <el-form-item label="address: " prop="address">
        <p>{{ user.address }}</p>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="goToPage">change</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data(){
    return{
      user: this.$store.getters.getCustomerById(1),
    }
  },
  methods: {
    goToPage() {
      this.$router.push('/customer/infoChange')
    },
  },
}
</script>

<style scoped>
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