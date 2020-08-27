<template>
  <section class="d-flex flex-column align-items-center">
    <BackBtn />
  </section>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue';

export default {
  name: 'User',
  mounted() {
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess, this.geoError,
    );
  },
  components: {
    BackBtn,
  },
  methods: {
    geoSuccess(position) {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.$store.dispatch('searchByCoords', coords);
    },
    geoError(e) {
      console.warn(e);
    },
  },
};
</script>
