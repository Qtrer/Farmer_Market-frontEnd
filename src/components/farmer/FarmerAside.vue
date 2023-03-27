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
  name: "FarmerAside",
  data(){
    return {
      menu_data:[
        {
          name: 'index',
          path: '/farmer/main'
        },
        {
          name: 'profile',
          path: '/farmer/info'
        },
        {
          name: 'listings',
          path: '/farmer/listings'
        },
        {
          name: 'orders',
          path: '/farmer/orders'
        },
        {
          name: 'create item',
          path: '/farmer/create'
        },
        {
          name: 'bulk upload',
          path: '/farmer/upload'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
