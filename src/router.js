import { createWebHistory, createRouter } from "vue-router"
//import LoginPage from './components/LoginPage'
//import RegistrationPage from './components/RegistrationPage'
import CustomerMain from './components/customer/CustomerMain'
import CustomerInfo from './components/customer/CustomerInfo'
import CustomerInfoChange from './components/customer/CustomerInfoChange'
import CustomerCart from './components/customer/CustomerCart'
import CustomerPayment from './components/customer/CustomerPayment'
import CustomerWishlist from './components/customer/CustomerWishlist'
import CustomerOrder from './components/customer/CustomerOrder'
import CustomerProductDetail from './components/product/ProductDetail'
import CustomerCommon from "./components/customer/CustomerCommon"
// Farmer
import FarmerBulkUpload from "./components/farmer/FarmerBulkUpload"
import FarmerCommon from "./components/farmer/FarmerCommon"
import FarmerCreateItem from "./components/farmer/FarmerCreateItem"
import FarmerInfo from './components/farmer/FarmerInfo'
import FarmerInfoChange from './components/farmer/FarmerInfoChange'
import FarmerListings from './components/farmer/FarmerListings'
import FarmerEditListing from './components/farmer/FarmerEditListing'
import FarmerMain from './components/farmer/FarmerMain'
import FarmerOrders from './components/farmer/FarmerOrders'

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
            { path: 'productDetail', name: 'productDetail', component: CustomerProductDetail },
        ],
    },
    {
        path: "/farmer",
        name: "farmerCommon",
        component: FarmerCommon,
        children: [
            { path: 'main', name: "farmerMain", component: FarmerMain },
            { path: 'info', name: "farmerInfo", component: FarmerInfo },
            { path: 'infoChange', name: "farmerInfoChange", component: FarmerInfoChange },
            { path: 'create', name: "farmerCreateItem", component: FarmerCreateItem },
            { path: 'listings', name: "farmerListings", component: FarmerListings },
            { path: 'editListing', name: "farmerEditListing", component: FarmerEditListing },
            { path: 'orders', name: "farmerOrders", component: FarmerOrders },
            { path: 'upload', name: "farmerBulkUpload", component: FarmerBulkUpload },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router