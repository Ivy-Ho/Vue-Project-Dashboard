<template>
  <!-- navebar start -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light opacity09">
      <router-link class="navbar-brand" :to="{name: 'Home'}">
        <h1 class="logo-ff logo-fz text-secondary mb-0">
          迴圈 ∞ 選框
        </h1>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁
              <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">品牌故事</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <!-- 購物車 dropdown -->
            <div class="dropdown">
              <button class="btn btn-sm position-relative" data-toggle="dropdown" >
                <i class="fas fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
                <span class="badge-pill badge-danger position-absolute bage-position">2</span>
              </button>
              <CartDropDown></CartDropDown>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navebar end -->
</template>

<script>
import CartDropDown from '@/components/CartDropDown.vue';

export default {
  name: 'Navbar',
  components: {
    CartDropDown,
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
