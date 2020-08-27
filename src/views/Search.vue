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
    <BackBtn />
  </form>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
    };
  },
  components: {
    BackBtn,
  },
  methods: {
    searchSubmit() {
      console.log(this.searchValue);
      this.searchValue = '';
    },
  },
};
</script>
