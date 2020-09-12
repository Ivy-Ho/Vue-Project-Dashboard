<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="dropdown-menu dropdown-menu-right " style="min-width:350px">
        <div class="px-4 py-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
          <h6>已選擇商品</h6>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeAllCartItem">
              <i class="far fa-trash-alt"> 清空購物車</i>
            </button>
          </div>
          <table class="table">
            <tbody v-if="cart.length">
              <tr v-for="item in cart" :key="item.id">
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.product.id)"
                  :disabled="status.loadingDeleteCart === item.product.id">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                    v-if="status.loadingDeleteCart === item.product.id"></span>
                    <i class="far fa-trash-alt" v-else></i>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                </td>
                <td>
                  {{ item.quantity }}{{ item.product.unit }}
                </td>
                <td>
                  {{ item.product.price | thousands }}
                </td>
              </tr>
            </tbody>
          </table>
          <router-link to="/checkout">
            <button class="btn btn-primary w-100">結帳去</button>
          </router-link>
          <!-- <a href="#" class="btn btn-primary btn-block">結帳去</a> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Cartmodal',
  data() {
    return {
      cart: [], // 購物車產品資訊
      cartTotal: 0, // 購物車總價
      isLoading: false,
      fullPage: true,
      status: {
        loadingUpdateCart: '',
        loadingDeleteCart: '',
      },
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;

      // 取得前台購物車列表 GET api/{uuid}/ec/shopping
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.cart = res.data.data;
          this.updateTotal();
        }).catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    updateTotal() {
      this.cartTotal = 0;
      this.cart.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },
    updateQuantity(id, quantity) {
      this.status.loadingUpdateCart = id;

      //  更新前台某一筆購物車資料 PATCH api/{uuid}/ec/shopping
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;

      const cart = {
        product: id,
        quantity,
      };

      this.$http.patch(url, cart)
        .then(() => {
          this.status.loadingUpdateCart = '';
          this.getCart();
        }).catch((err) => {
          this.status.loadingUpdateCart = '';
          console.log(err);
        });
    },
    removeAllCartItem() {
      this.isLoading = true;
      //   前台刪除購物車全部資料 DELETE api/{uuid}/ec/shopping/all/product
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url)
        .then((res) => {
          this.isLoading = false;
          console.log(res);
          this.getCart();
        }).catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    removeCartItem(id) {
      this.status.loadingDeleteCart = id;

      //  刪除前台某一筆購物車資料 DELETE api/{uuid}/ec/shopping/{pid}
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;

      this.$http.delete(url, id)
        .then(() => {
          this.status.loadingDeleteCart = id;
          this.getCart();
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
