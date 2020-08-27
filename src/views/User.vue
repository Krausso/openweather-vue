<template>
  <section class="d-flex flex-column align-items-center">
    <WeatherCards :data="this.$store.state.foundUserWeather" />
    <HomeBtn />
  </section>
</template>

<script>
import HomeBtn from '@/components/HomeBtn.vue';
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
    HomeBtn, WeatherCards,
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
