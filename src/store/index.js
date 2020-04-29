import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people : [],
    peopleReady: false
  },
  mutations: {
    setPeople (state, data){
      state.people = data
      state.peopleReady = true
    }
  },
  actions: {
    setPeople : async (context) => {
        fetch('https://updates.suade.org/files/people.json').then((response) => {
          response.json().then(function (data) {
            context.commit('setPeople', data)
          })
        })
    }
  },
  modules: {
  }
})
