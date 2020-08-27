<template>
  <div class="d-flex flex-column align-items-center">
    <router-link
      to="/user"
      class="btn btn-primary w-25 mt-3"
    >
      Weather in your city
    </router-link>
    <router-link
      to="/search"
      class="btn btn-primary w-25 mt-3"
    >
      Search cities
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>
