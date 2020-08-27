<template>
  <section class="d-flex flex-column align-items-center">
    <div
      v-for="(pair, index) of data"
      :key="index"
    >
      <b-card
        :title="pair[0]"
        class="mt-3"
      >
        <b-card-text>{{ pair[1] }}</b-card-text>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  width: 50vw !important;
}
</style>
