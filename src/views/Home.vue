<template>
  <div class="d-flex flex-column align-items-center">
    <b-button
      variant="primary"
      href="/user"
      class="w-25 mt-3"
    >
      Weather in your city
    </b-button>
    <b-button
      variant="primary"
      href="/search"
      class="w-25 mt-3"
    >
      Search cities
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>
