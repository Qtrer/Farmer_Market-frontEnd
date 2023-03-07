<template>
  <div class="loginBody">
    <div class="loginDiv">
      <div class="loginContent">
        <h1 class="loginTitle">Farmer Market</h1>
        <el-form :model="loginForm" label-width="100px"
                 :rules="rules" ref="loginForm">
          <el-form-item label="email" prop="name">
            <el-input style="width: 200px" type="text" v-model="loginForm.name"
                      autocomplete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-input style="width: 200px" type="password" v-model="loginForm.password"
                      show-password autocomplete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="confirm">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLogin",
  data(){
    return{
      loginForm:{
        name:'',
        password:''
      },
      rules:{

      }
    }
  },
  methods:{
    confirm(){
      this.$router.replace('/index');
    }
  }
}
</script>

<style scoped >
.loginBody {
  width: 100%;
  height: 100%;
  background-color: #B3C0D1;
}
.loginDiv {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -250px;
  width: 450px;
  height: 330px;
  background: #fff;
  border-radius: 5%;

}
.loginTitle {
  margin: 20px 0;
  text-align: center;
}
.loginContent {
  width: 400px;
  height: 250px;
  position: absolute;
  top: 25px;
  left: 25px;
}
</style>