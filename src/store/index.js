import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people : [],
    peopleReady: false,
    defaultColours : ['#3366cc','#dc3912','#ff9900','#109618','#990099','#0099c6','#dd4477','#66aa00','#b82e2e','#316395']
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
