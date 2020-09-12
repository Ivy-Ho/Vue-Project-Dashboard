<template>
  <div class="checkout container">
    <h2 class="text-center">這裡是前台 checkout 頁面</h2>
    <loading :active.sync="isLoading"></loading>
    <!-- 購物車頁面 start -->
    <div class="my-5 row justify-content-center">
      <div class="col-8">
        <table class="table">
          <thead>
            <th>刪除</th>
            <th>品名</th>
            <th width="150px">
              數量
            </th>
            <th>單位</th>
            <th>單價</th>
          </thead>
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
              <td class="align-middle">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-primary"
                    type="button"
                    @click="item.quantity--; updateQuantity(item.product.id, item.quantity)"
                    :disabled="item.quantity === 1">
                      -
                    </button>
                  </div>
                  <input id="inlineFormInputGroupUsername"
                  type="number"
                  class="form-control text-center"
                  v-model="item.quantity"
                  @change="updateQuantity(item.product.id, item.quantity)"
                  min="1">
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary"
                    type="button"
                    @click="item.quantity++; updateQuantity(item.product.id, item.quantity)"
                    :disabled="status.loadingUpdateCart === item.product.id">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                      v-if="status.loadingUpdateCart === item.product.id"></span>
                    <span v-else>+</span>
                    </button>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                {{ item.product.unit }}
              </td>
              <td class="align-middle text-right">
                {{ item.product.price | thousands }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right">
                總計
              </td>
              <td class="text-right">
                {{ cartTotal | thousands}}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- 購物車頁面 end -->

    <!-- 表單 start -->
    <h2 class="text-center">訂單資訊</h2>
    <div class="my-5 row justify-content-center text-left">
      <validation-observer v-slot="{ invalid }" class="col-md-6">
        <form @submit.prevent="createOrder">
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors, classes}">
              <label for="username">*收件人姓名</label>
              <input id="username" type="text" name="username"
                v-model="form.name" class="form-control"
                :class="classes">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider rules="required|email" v-slot="{ errors, classes}">
              <label for="email">*Email</label>
              <input id="email" type="email" name="email"
               v-model="form.email" class="form-control" :class="classes">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider rules="required|min:8" v-slot="{ errors, classes}">
              <label for="tel">*電話</label>
              <input id="tel" type="tel" name="tel"
               v-model="form.tel" class="form-control" :class="classes">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors, classes}">
              <label for="address">*地址</label>
              <input id="address" type="text" name="address"
               v-model="form.address" class="form-control" :class="classes">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors}">
              <label for="payment">*購買方式</label>
              <select id="payment" name="payment" v-model="form.payment" class="form-control">
                <option value="" disabled>
                  請選擇付款方式
                </option>
                <option value="WebATM">
                  WebATM
                </option>
                <option value="ATM">
                  ATM
                </option>
                <option value="CVS">
                  CVS
                </option>
                <option value="Barcode">
                  Barcode
                </option>
                <option value="Credit">
                  Credit
                </option>
                <option value="ApplePay">
                  ApplePay
                </option>
                <option value="GooglePay">
                  GooglePay
                </option>
              </select>
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <label for="message">留言</label>
            <textarea id="message" type="message" v-model="form.message"
             class="form-control" cols="30" rows="3"></textarea>
          </div>
          <div class="text-right">
            <button type="submit" class="btn btn-primary" :disabled="invalid">送出表單</button>
          </div>
        </form>
      </validation-observer>
    </div>
    <!-- 表單 end -->
  </div>
</template>

<script>
export default {
  name: 'cart',
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
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        purchase: '',
        message: '',
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
    createOrder() {
      this.isLoading = true;
      // 前台新增一筆訂單 POST api/{uuid}/ec/orders
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      this.$http.post(url, order)
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          alert('訂單送出成功!');
          // 清空表單資料
          this.$data.form = this.$options.data().form;
          this.getCart();
        }).catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
