import {createStore} from 'vuex'
import products from "@/store/productList";
import customers from "@/store/customerList";
import farmers from "@/store/farmerList";

const store = createStore({
    state() {
        return {
            customers,
            farmers,
            products,
        }
    },
    mutations: {
        toggleCartSelected(state, id){
            const product = state.products.state.cartProduct.find((product) => product.id === id)
            if (product) {
                product.isSelected = !product.isSelected
            }
        },
        toggleWishlistSelected(state, id){
            const product = state.products.state.wishlistProduct.find((product) => product.id === id)
            if (product) {
                product.isSelected = !product.isSelected
            }
        },
        addWishlist(state, id){
            if (!state.products.state.wishlistProduct.find(p => p.id === id)){
                const product = this.getters.getProductById(id)
                product.isSelected = false
                state.products.state.wishlistProduct.push(product)
            }
        },
        deleteWishlist(state, id){
            if (state.products.state.wishlistProduct.find(p => p.id === id)){
                const product = this.getters.getWishlistById(id)
                state.products.state.wishlistProduct.delete(product)
            }
        },
        addCart(state, id){
            if (!state.products.state.cartProduct.find(p => p.id === id)){
                const product = this.getters.getProductById(id)
                product.num = 1
                product.isSelected = false
                state.products.state.cartProduct.push(product)
            } else {
                state.products.state.productList.find((p) => p.id === id).num ++
            }
        },
        deleteCart(state, id){
            if (state.products.state.cartProduct.find(p => p.id === id)){
                const product = this.getters.getCartById(id)
                state.products.state.cartProduct.delete(product)
            }
        },
    },
    getters: {
        getProductById: (state) => (id) => {
            const product = state.products.state.productList.find((product) => product.id === id)
            if (product) {
                return product
            }
        },
        getCartById: (state) => (id) => {
            const product = state.products.state.cartProduct.find((product) => product.id === id)
            if (product) {
                return product
            }
        },
        getWishlistById: (state) => (id) => {
            const product = state.products.state.wishlistProduct.find((product) => product.id === id)
            if (product) {
                return product
            }
        },
        getCustomerById: (state) => (id) => {
            const product = state.customers.state.customerList.find((customer) => customer.id === id)
            if (product) {
                return product
            }
        },
        getFarmerById: (state) => (id) => {
            const product = state.farmers.state.farmerList.find((farmer) => farmer.id === id)
            if (product) {
                return product
            }
        },
        login: (state) => (email, password) => {
            const user = state.farmers.state.farmerList.find((farmer) => farmer.email === email && farmer.password === password)
            if (user) {
                return user
            } else {
                return state.customers.state.customerList.find((customer) => customer.email === email && customer.password === password)
            }
        },
    },
})

export default store