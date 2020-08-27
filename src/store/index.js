import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { correctData, processError } from './functions/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: 'f0deab4028f35b340f369108e89c9cd5',
    foundCityWeather: [],
    foundUserWeather: [],
  },
  mutations: {
    changeCityWeather(state, newWeather) {
      state.foundCityWeather = newWeather;
    },
  },
  actions: {
    searchByCity({ commit, state }, city) {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${state.apiKey}`,
      )
        .then((weather) => {
          commit('changeCityWeather', correctData(weather.data));
        })
        .catch((error) => {
          processError(error);
        });
    },
    searchByCoords({ state }, coords) {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${state.apiKey}`,
      )
        .then((weather) => {
          console.log(weather.data);
        })
        .catch((error) => {
          processError(error);
        });
    },
  },
});
