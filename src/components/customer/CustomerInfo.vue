<template>
  <div style="height: 50px">
    <h1 style="text-align:left;margin: 10px">Info Management</h1>
  </div>
  <div style="height: 300px">
    <el-form :model="infoForm" label-width="100px" ref="infoForm">
      <el-form-item label="username: " prop="username">
        <p>{{ infoForm.username }}</p>
      </el-form-item>
      <el-form-item label="email: " prop="email">
        <p>{{ infoForm.email }}</p>
      </el-form-item>
      <el-form-item label="password: " prop="password">
        <p>{{ infoForm.password }}</p>
      </el-form-item>
      <el-form-item label="address: " prop="address">
        <p>{{ infoForm.address }}</p>
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
      infoForm:{
        username: '',
        email: '',
        password: '',
        address: '',
      }
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