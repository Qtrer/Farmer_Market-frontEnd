<template>
  <div>
    <div style="height: 50px">
      <h1 style="text-align:left;margin: 10px">Info Management</h1>
    </div>
    <div>
      <el-form :model="user" label-width="200px" ref="infoForm">
        <el-form-item label="username: " prop="username">
          <el-input type="text" v-model="user.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="email: " prop="email">
          <el-input type="text" v-model="user.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="password: " prop="password">
          <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="confirm password: " prop="password">
          <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="address: " prop="address">
          <el-input type="text" v-model="user.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 150px">
          <el-button type="success" @click="changeInfo">submit</el-button>
          <el-button @click="goToPage">cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerInfoChange",
  data(){
    return{
      user: this.$store.getters.getCustomerById(1),
    }
  },
  methods: {
    goToPage() {
      this.$router.push('/customer/info')
    },
    changeInfo() {
      this.$router.push('/customer/info')
    }
  },
}
</script>

<style scoped>
p {
  height: 30px;
}
.el-input {
  width: 500px;
  height: 30px;
}
.el-form {
  display: inline-block;
  text-align: center;
  vertical-align: center;
  height: 30px;
}
</style>