<template>
  <section class="d-flex flex-column align-items-center">
    <WeatherCards :data="this.$store.state.foundUserWeather" />
    <BackBtn />
  </section>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue';
import WeatherCards from '@/components/WeatherCards.vue';
import { mapActions } from 'vuex';

export default {
  name: 'User',
  mounted() {
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess, this.geoError,
    );
  },
  components: {
    BackBtn, WeatherCards,
  },
  methods: {
    ...mapActions([
      'searchByCoords',
    ]),
    geoSuccess(position) {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.searchByCoords(coords);
    },
    geoError(e) {
      console.warn(e);
    },
  },
};
</script>
