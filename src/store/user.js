import firebase from 'firebase'

export default{
    state: {
        user: {
            isAuthenticated: false,
            uid: null
        }
    },
    getters: {
    },
    mutations: {
        set_user(state, payload){
            state.user.isAuthenticated = true
            state.user.uid = payload
        }
    },
    actions: {
        SIGNUP({commit}, payload){
            commit('set_processing',true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then((user) => {
                commit('set_user', user.uid)
                commit('set_processing',false)
            })
            .catch((error) => {
                commit('set_processing',false)
                commit('set_error', error.message)
            });
        }
    }
}
