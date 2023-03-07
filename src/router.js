import { createWebHistory, createRouter } from "vue-router"
import CustomerIndex from './components/customer/CustomerIndex'
import CustomerMain from './components/customer/CustomerMain'
import CustomerInfo from './components/customer/CustomerInfo'
import CustomerCart from './components/customer/CustomerCart'
const routes = [
    {
        path: '/customer',
        name: 'customerIndex',
        component: CustomerIndex,
        redirect: '/customer/main',
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router