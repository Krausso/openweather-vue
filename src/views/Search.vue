<template>
  <form
    class="d-flex flex-column align-items-center"
    @submit.prevent="searchSubmit()"
  >
    <b-input
      type="text"
      v-model="searchValue"
      class="w-25 mt-3"
    />
    <b-button
      variant="success"
      type="submit"
      class="w-25 mt-3"
    >
      Submit
    </b-button>
    <WeatherCards :data="this.$store.state.foundCityWeather" />
    <BackBtn />
  </form>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue';
import WeatherCards from '@/components/WeatherCards.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
    };
  },
  components: {
    BackBtn, WeatherCards,
  },
  methods: {
    ...mapActions([
      'searchByCity',
    ]),
    searchSubmit() {
      if (this.searchValue !== '') {
        this.searchByCity(this.searchValue);
        this.searchValue = '';
      }
    },
  },
};
</script>
