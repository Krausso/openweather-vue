<template>
  <div id="app">
    <Heading />
    <router-view/>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue';

export default {
  name: 'App',
  components: {
    Heading,
  },
};
</script>
