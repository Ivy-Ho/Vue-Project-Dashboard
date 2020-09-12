<template>
  <div id="app">
    <Toast></Toast>
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Toast,
  },
};
</script>

<style lang="scss">
@import './assets/all';
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
#app {
  font-family: 'Noto Sans TC',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
