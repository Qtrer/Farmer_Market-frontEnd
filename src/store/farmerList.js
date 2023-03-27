import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            customerList: [
                { id: 1, username: 'farmer1', email:'farmer1@gmail.com', password:'123456', address:'sheffield' },
                { id: 2, username: 'farmer2', email:'farmer2@gmail.com', password:'123456', address:'london' },
                { id: 3, username: 'farmer3', email:'farmer3@gmail.com', password:'123456', address:'manchester' },
                { id: 4, username: 'farmer4', email:'farmer4@gmail.com', password:'123456', address:'edinburgh' },
                { id: 5, username: 'farmer5', email:'farmer5@gmail.com', password:'123456', address:'glasgow' },
            ]
        }
    },
    mutations: {
        getFarmer (state, data) {
            for (let farmer in state.farmerList.state.farmerList) {
                if (farmer.email === data.email && farmer.password === data.password){
                    return farmer
                }
            }
        },
    }
})

export default store