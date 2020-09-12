<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <header class="py-4 mt-5">
      <!-- <div class="position-relative d-flex align-items-center
       justify-content-center" style="min-height: 400px;">
        <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0;
        background-image:url(https://images.unsplash.com/photo-1542436781-fb5c64ed9ee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80);
        background-position: center center; background-repeat: no-repeat; opacity: 0.9;"></div>
      </div> -->
    </header>
    <section class="py-4">
      <div class="container">
        <div class="row">
          <!-- sidebar start-->
          <div class="col-md-4">
            <div class="accordion border border-bottom border-top-0 border-left-0
             border-right-0 mb-3" id="accordionExample">
              <div class="card border-0">
                <div class="card-header px-0 py-4 bg-white border
                 border-bottom-0 border-top border-left-0 border-right-0"
                  id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                  <div class="d-flex justify-content-between align-items-center pr-1">
                    <h4 class="mb-0">
                      基本款
                    </h4>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                  <div class="card-body py-0">
                    <ul class="list-unstyled">
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card border-0">
                <div class="card-header px-0 py-4 bg-white border border-bottom-0
                 border-top border-left-0 border-right-0" id="headingTwo"
                  data-toggle="collapse" data-target="#collapseTwo">
                  <div class="d-flex justify-content-between align-items-center pr-1">
                    <h4 class="mb-0">
                      設計款
                    </h4>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                  <div class="card-body py-0">
                    <ul class="list-unstyled">
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card border-0">
                <div class="card-header px-0 py-4 bg-white border border-bottom-0
                 border-top border-left-0 border-right-0" id="headingThree"
                  data-toggle="collapse" data-target="#collapseThree">
                  <div class="d-flex justify-content-between align-items-center pr-1">
                    <h4 class="mb-0">
                      獨家款
                    </h4>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
                  <div class="card-body py-0">
                    <ul class="list-unstyled">
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                      <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar end-->
          <!-- 產品列表 start -->
          <div class="col-8">
            <div class="row">
              <ul class="col-md-6 mb-4" v-for="item in products" :key="item.id">
                <li class="card border-0 shadow-sm">
                  <div style="height: 150px; background-size: cover; background-position: center"
                    :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
                  <div class="card-body text-left">
                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h5 class="card-title">
                      <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <!-- 售價(price)欄位是可選的，因此售價若為空，就顯示原價(origin_price)
                            售價若不為空，就顯示原價(origin_price)與售價(price) -->
                      <div v-if="!item.price" class="h5">
                        {{ item.origin_price}} 元
                      </div>
                      <div v-else>
                        <del><small>原價 {{ item.origin_price  }} 元</small></del>
                        <div class="h5">
                          現在只要 <span class="text-danger">{{ item.price }}</span>元
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button type="button" class="btn btn-primary btn-sm"
                      @click="goPage(item)"
                    :disabled="status.loadingItem === item.id">
                      <i v-if="status.loadingItem === item.id"
                       class="spinner-grow spinner-grow-sm">
                      </i>
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-sm ml-auto"
                      @click="addToCart(item.id)" :disabled="status.loadingCart === item.id">
                      <i v-if="status.loadingCart === item.id"
                      class="spinner-grow spinner-grow-sm"></i>
                      加到購物車
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
            <!-- 產品列表 end -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [],
      isLoading: false,
      fullPage: true,
      status: {
        loadingItem: '',
        loadingCart: '',
      },
    };
  },
  methods: {
    goPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    getProducts(page = 1) {
      // vue-loading-overlay 元件開啟
      this.isLoading = true;

      // 取得前台所有商品列表 GET api/{uuid}/ec/products
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http.get(url)
        .then((res) => {
        // vue-loading-overlay 元件關閉
          this.isLoading = false;
          console.log(res);
          this.products = res.data.data;
        }).catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingCart = id;

      // 前台新增某一筆購物車資料 POST api/{uuid}/ec/shopping
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;

      const cart = {
        product: id,
        quantity,
      };

      this.$http.post(url, cart)
        .then(() => {
          this.status.loadingCart = '';
          alert('加入成功!');
        }).catch((err) => {
          this.status.loadingCart = '';
          console.log(err.response.data.errors);
          alert('加入失敗!該產品已在購物車內~');
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
