import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: 'f0deab4028f35b340f369108e89c9cd5',
  },
  mutations: {
  },
  actions: {
    searchByCity({ state }, city) {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${state.apiKey}`,
      )
        .then((weather) => {
          console.log(weather.data);
        })
        .catch((e) => console.warn(`${e.response.status} ${e.response.statusText}`));
    },
    searchByCoords({ state }, coords) {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${state.apiKey}`,
      )
        .then((weather) => {
          console.log(weather.data);
        });
    },
  },
});
