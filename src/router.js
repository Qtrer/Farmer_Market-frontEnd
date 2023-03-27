import { createWebHistory, createRouter } from "vue-router"
import CustomerMain from './components/customer/CustomerMain'
import CustomerInfo from './components/customer/CustomerInfo'
import CustomerInfoChange from './components/customer/CustomerInfoChange'
import CustomerCart from './components/customer/CustomerCart'
import CustomerPayment from './components/customer/CustomerPayment'
import CustomerWishlist from './components/customer/CustomerWishlist'
import CustomerOrder from './components/customer/CustomerOrder'
import CustomerProductDetail from './components/product/ProductDetail'
import CustomerCommon from "./components/customer/CustomerCommon";

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
//             let users = this.$store.state.customerList.state.customerList
//             for (let user in users) {
//                 if (user.id === id) {
//                     return user
//                 }
//             }
//         }
//     },
// }

const routes = [
    {
        path: '/customer',
        name: 'customerCommon',
        component: CustomerCommon,
        children: [
            { path: 'main', name: 'customerMain', component: CustomerMain },
            { path: 'info', name: 'customerInfo', component: CustomerInfo },
            { path: 'infoChange', name: 'customerInfoChange', component: CustomerInfoChange },
            { path: 'cart', name: 'customerCart', component: CustomerCart },
            { path: 'payment', name: 'customerPayment', component: CustomerPayment },
            { path: 'wishlist', name: 'customerWishlist', component: CustomerWishlist },
            { path: 'order', name: 'customerOrder', component: CustomerOrder },
            { path: 'productDetail/:id', name: 'productDetail', component: CustomerProductDetail },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router