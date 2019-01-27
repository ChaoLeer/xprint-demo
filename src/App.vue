<template>
  <div id="app" class="xprint-container" @click="$xprint()">
    <xpage class="page"></xpage>
    <xpage class="page" white></xpage>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created() {
    console.log(this)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page {
  background: url('./assets/bg.jpg') no-repeat center;
  background-size: cover;
}
</style>
