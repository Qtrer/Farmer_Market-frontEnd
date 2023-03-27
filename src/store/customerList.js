import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            customerList: [
                { id: 1, username: 'user1', email:'user1@gmail.com', password:'123456', address:'sheffield' },
                { id: 2, username: 'user2', email:'user2@gmail.com', password:'123456', address:'london' },
                { id: 3, username: 'user3', email:'user3@gmail.com', password:'123456', address:'manchester' },
                { id: 4, username: 'user4', email:'user4@gmail.com', password:'123456', address:'edinburgh' },
                { id: 5, username: 'user5', email:'user5@gmail.com', password:'123456', address:'glasgow' },
            ]
        }
    },
})

export default store