<template>
  <el-menu background-color="#545c64" text-color="lightgrey"
           active-text-color="lightgreen" router>
    <el-menu-item :index="item.path" v-for="item in menu_data" :key="item.name">
      <i :class="item.icon"></i>{{ item.name }}
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "CustomerAside",
  data(){
    return {
      menu_data:[
        {
          name:'index',
          icon:'el-icon-location',
          path:'/customer/main'
        },
        {
          name:'profile',
          icon:'el-icon-document',
          path:'/customer/info'
        },
        {
          name:'cart',
          icon:'el-icon-setting',
          path:'/customer/cart'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>