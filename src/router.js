import { createWebHistory, createRouter } from "vue-router"
// import CustomerIndex from './components/customer/CustomerIndex'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import CustomerMain from './components/customer/CustomerMain'
import CustomerInfo from './components/customer/CustomerInfo'
import CustomerCart from './components/customer/CustomerCart'
import CustomerWishlist from './components/customer/CustomerWishlist'
import CustomerOrder from './components/customer/CustomerOrder'
import MockTest from './components/Test'
const routes = [
    {
        path: '/test',
        name: 'mockTest',
        component: MockTest,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'RegistrationPage',
        component: RegistrationPage,
    },
    {
        path: '/customer/main',
        name: 'customerMain',
        component: CustomerMain,
    },
    {
        path: '/customer/info',
        name: 'customerInfo',
        component: CustomerInfo,
    },
    {
        path: '/customer/cart',
        name: 'customerCart',
        component: CustomerCart,
    },
    {
        path: '/customer/wishlist',
        name: 'customerWishlist',
        component: CustomerWishlist,
    },
    {
        path: '/customer/order',
        name: 'customerOrder',
        component: CustomerOrder,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router