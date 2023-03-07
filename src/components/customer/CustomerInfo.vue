<template>
  <el-button @click="getTest">getTest</el-button>
  <el-button @click="postTest">postTest</el-button>
<!--  <div>-->
<!--    <h1 style="height: 50px;">Info Management</h1>-->
<!--    <div>-->
<!--      <el-input>Username: </el-input>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "CustomerInfo",
  methods: {
    getTest() {
      this.$http.get('/test').then(res=>{
        console.log(res.data)
      })
    },
    postTest() {
      this.$http.post('/post/test1', {id: 1}).then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>