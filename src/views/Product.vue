<template>
  <div class="product">
    <loading :active.sync="isLoading"></loading>
    <h2>這裡是前台-單一產品頁面</h2>
    <h3>{{ product.title }}</h3>
    <h3>{{ product.description }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.isLoading = false;
        this.product = res.data.data;
      }).catch((err) => {
        this.isLoading = false;
        console.log(err);
      });
  },
};
</script>
