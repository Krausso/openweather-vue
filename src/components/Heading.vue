<template>
  <div class="app-header d-flex flex-column align-items-center">
    <h2 class="header-title">Openweather Vue</h2>
    <p class="header-text">Here you can find out weather in several cities</p>
  </div>
</template>

<script>
export default {
  name: 'Heading',
};
</script>

<style lang="scss" scoped>
.app-header {
  padding: 1.5vh 0;
  margin: 0 auto;

  width: 30vw;

  border: 1px solid #ccc;
  border-top: none;
  border-radius: 5px;
  background: lighten(#ccc, 15%);

  .header-text {
    font-size: 110%;
  }
}
</style>
