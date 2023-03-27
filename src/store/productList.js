import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            productList: [
                { id: 1, name: 'potato', farmerName: 'farmer1', price: 3, description: 'good potato' },
                { id: 2, name: 'tomato', farmerName: 'farmer1', price: 5, description: 'good tomato' },
                { id: 3, name: 'corn', farmerName: 'farmer2', price: 2, description: 'good corn' },
                { id: 4, name: 'rice', farmerName: 'farmer2', price: 1, description: 'good rice' },
                { id: 5, name: 'soybeans', farmerName: 'farmer3', price: 3, description: 'good soybeans' },
                { id: 6, name: 'carrot', farmerName: 'farmer3', price: 4, description: 'good carrot' },
                { id: 7, name: 'onion', farmerName: 'farmer4', price: 2, description: 'good onion' },
                { id: 8, name: 'cabbage', farmerName: 'farmer4', price: 1, description: 'good cabbage' },
                { id: 9, name: 'lettuce', farmerName: 'farmer5', price: 3, description: 'good lettuce' },
                { id: 10, name: 'broccoli', farmerName: 'farmer5', price: 5, description: 'good broccoli' },
                { id: 11, name: 'peas', farmerName: 'farmer6', price: 3, description: 'good peas' },
                { id: 12, name: 'beans', farmerName: 'farmer6', price: 2, description: 'good beans' },
                { id: 13, name: 'barley', farmerName: 'farmer7', price: 3, description: 'good barley' },
                { id: 14, name: 'oats', farmerName: 'farmer7', price: 1, description: 'good oats' },
                { id: 15, name: 'sorghum', farmerName: 'farmer8', price: 5, description: 'good sorghum' },
                { id: 16, name: 'millet', farmerName: 'farmer8', price: 4, description: 'good millet' },
                { id: 17, name: 'nuts', farmerName: 'farmer9', price: 2, description: 'good nuts' },
                { id: 18, name: 'sunflower', farmerName: 'farmer9', price: 1, description: 'good sunflower' },
                { id: 19, name: 'wheat', farmerName: 'farmer10', price: 2, description: 'good wheat' },
                { id: 20, name: 'cauliflower', farmerName: 'farmer10', price: 3, description: 'good cauliflower' },
            ],
            cartProduct: [
                { id: 1, name: 'potato', farmerName: 'farmer1', price: 3, description: 'good potato', num: 1, isSelected: false },
                { id: 2, name: 'tomato', farmerName: 'farmer1', price: 5, description: 'good tomato', num: 1, isSelected: false },
                { id: 3, name: 'corn', farmerName: 'farmer2', price: 2, description: 'good corn', num: 1, isSelected: false },
                { id: 9, name: 'lettuce', farmerName: 'farmer5', price: 3, description: 'good lettuce', num: 1, isSelected: false },
                { id: 10, name: 'broccoli', farmerName: 'farmer5', price: 5, description: 'good broccoli', num: 1, isSelected: false },
            ],
            wishlistProduct: [
                { id: 12, name: 'beans', farmerName: 'farmer6', price: 2, description: 'good beans', isisSelected: false },
                { id: 13, name: 'barley', farmerName: 'farmer7', price: 3, description: 'good barley', isisSelected: false },
                { id: 14, name: 'oats', farmerName: 'farmer7', price: 1, description: 'good oats', isisSelected: false },
                { id: 15, name: 'sorghum', farmerName: 'farmer8', price: 5, description: 'good sorghum', isisSelected: false },
                { id: 16, name: 'millet', farmerName: 'farmer8', price: 4, description: 'good millet', isisSelected: false },
                { id: 17, name: 'nuts', farmerName: 'farmer9', price: 2, description: 'good nuts', isisSelected: false },
                { id: 18, name: 'sunflower', farmerName: 'farmer9', price: 1, description: 'good sunflower', isisSelected: false },
                { id: 19, name: 'wheat', farmerName: 'farmer10', price: 2, description: 'good wheat', isisSelected: false },

            ],
        }
    },
    getters: {
        getProductById: (state) => (id) => {
            return state.productList.find((product) => product.id === id)
        },
        getCartById: (state) => (id) => {
            return state.cartProduct.find((product) => product.id === id)
        },
        getWishlistById: (state) => (id) => {
            return state.wishlistProduct.find((product) => product.id === id)
        },
    },
    mutations: {
        toggleSelect(state, id){
            const product = state.cartProduct.find((product) => product.id === id)
            if (product) {
                product.isSelected = !product.isSelected
            }
        }
    }
})

export default store
