<template>
  <div is="swiper" ref="mySwiper" class="sale__content swiper-container" :options="swiperOption">
    <div class="swiper-slide" is="swiper-slide" v-for="sale in sales" :key="'sale' + sale.id">
      <router-link :to="`/product/${sale.id}`" target="_blank">
        <div class="sale-pic">
          <img src="https://images.unsplash.com/photo-1542436781-fb5c64ed9ee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80" alt="">
        </div>
        <div class="product-name">
          <h5>{{ sale.title }}</h5>
          <p>NT${{ sale.price | thousands }}<span class="sale-icon">sale</span></p>
          <div class="orign">NT${{ sale.origin_price | thousands }}</div>
        </div>
      </router-link>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';

export default {
  name: 'Swiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(1, 2000, true);
  },
};
</script>
