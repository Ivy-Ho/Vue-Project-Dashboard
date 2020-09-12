<template>
  <div class="layout">
    <Navbar></Navbar>
    <router-view/>

    <!-- footer start -->
    <footer class="px-4 py-3 bg-light text-center">
      <p class="mb-0">© Copyright 2020 <span class="logo-ff">迴圈 ∞ 選框</span></p>
    </footer>
    <!-- footer end -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
  },
  data() {
    return {

    };
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
@import url(https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap);
  .logo-font {
    font-family: 'cwTeXYen','Baloo Tamma 2', sans-serif;
    font-size: 40px;
  }
  .bage-position {
    top: -1px;
    right: -1px;
  }
</style>
