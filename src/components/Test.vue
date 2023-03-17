<template>
  <el-button @click="getTest">getTest</el-button>
  <el-button @click="postTest">postTest</el-button>
  <el-button @click="addTest">addTest</el-button>
  <el-button @click="modTest">modTest</el-button>
  <el-button @click="delTest">delTest</el-button>
  <el-button @click="searchTest">searchTest</el-button>
</template>

<script>
export default {
  name: "MockTest",
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
    },
    addTest(){
      this.$axios.post("/post/add",{id:1,name:'test'}).then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>