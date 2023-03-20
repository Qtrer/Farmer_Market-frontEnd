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
          path:'/customer/main'
        },
        {
          name:'profile',
          path:'/customer/info'
        },
        {
          name:'cart',
          path:'/customer/cart'
        },
        {
          name:'wishlist',
          path:'/customer/wishlist'
        },
        {
          name:'order',
          path:'/customer/order'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>