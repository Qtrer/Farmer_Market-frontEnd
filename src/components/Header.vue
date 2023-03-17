<template>
  <header>
    <div>
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <div>
      <h1>Farmer Market</h1>
    </div>
    <div style="flex: 1">
      <el-input style="width: 500px;padding: 10px;height: 50px" type="text" size="small"></el-input>
      <el-button type="success" icon="search">Search</el-button>
    </div>
    <div>
      <el-avatar :size="40" :src="avatar" :class="['avatarInfo']"></el-avatar>
      <el-button type="text" style="color: lightgreen;margin-top: -30px">logout</el-button>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      avatar: require('../assets/avatar.png')
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .avatarInfo {
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
  }
</style>