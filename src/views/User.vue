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
    navigator.geolocation.getCurrentPosition(console.log, console.log);
  },
  components: {
    BackBtn,
  },
  methods: {
    geoSuccess(pos) {
      const coords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      console.log(coords);
    },
    geoError(e) {
      console.log(e);
    },
  },
};
</script>
