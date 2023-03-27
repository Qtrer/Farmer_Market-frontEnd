<template>
  <div>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside style="width: 250px">
          <Aside/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '../Header'
import Aside from './CustomerAside'
import Footer from '../Footer'

export default {
  name: "CustomerIndex",
  components:{
    Header,
    Aside,
    Footer
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: grey;
    color: lightgreen;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: lightgrey;
    color: black;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>