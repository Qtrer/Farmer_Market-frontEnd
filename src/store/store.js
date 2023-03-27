import {createStore} from 'vuex'
import productList from "@/store/productList";
import customerList from "@/store/customerList";
import farmerList from "@/store/farmerList";

const store = createStore({
    state() {
        return {
            customerList,
            farmerList,
            productList,
        }
    },
    mutations: {
        toggleCartSelected(state, id){
            const product = state.productList.state.cartProduct.find((product) => product.id === id)
            if (product) {
                product.isSelected = !product.isSelected
            }
        },
        toggleWishlistSelected(state, id){
            const product = state.productList.state.wishlistProduct.find((product) => product.id === id)
            if (product) {
                product.isSelected = !product.isSelected
            }
        }
    }
})

export default store