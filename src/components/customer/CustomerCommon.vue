<template>
  <router-view/>
</template>

<script>
// import {useStore} from 'vuex'
// const User = {
//     data() {
//         return {
//             user: null
//         }
//     },
//     created() {
//         const userId = this.$route.params.id
//         this.user = this.getUserById(userId)
//     },
//     methods: {
//         getUserById(id) {
//           const store = useStore()
//           let users = store.state.customerList.state.customerList
//           for (let user in users) {
//             if (user.id === id) {
//               return user
//             }
//           }
//         }
//     },
// }
// User.created()
export default {
  name: "CustomerCommon",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>