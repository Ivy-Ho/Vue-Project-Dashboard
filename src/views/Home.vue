<template>
  <div class="home bg-parallax home-bgdImg">
    <!-- hero start -->
    <section>
      <div class="container vh-100" id="header-ele">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-4 text-center">
            <div class="bg-white opacity09 py-4" data-aos="fade-up" data-aos-duration="3000">
              <h2 class="logo-fz logo-ff">迴圈 ∞ 選框</h2>
              <p class="text-muted">每一段回憶都值得以最好的方式陳列</p>
              <router-link class="navbar-brand" :to="{name: 'Products'}">
                <button class="btn btn-primary rounded-0">開始選購</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- hero end -->

    <!-- popular products swiper start -->
    <section class="bg-white">
      <div class="container py-3">
        <div class="row">
        </div>
      </div>
    </section>
    <!-- popular products start -->

    <!-- index content start -->
    <section class="bg-white py-5">
      <ul class="container py-3">
        <!-- 1 -->
        <li class="row align-items-center mb-3">
          <div class="col-12 col-sm-6 d-flex justify-content-center">
            <div data-aos="fade-right">
              <h3 class="my-1">
                藝術的陳列，陳列的藝術。
              </h3>
              <p>
                生活空間有如個人小型展覽館，<br>
                呈現作品的方式，抑是一種個人品味的展現。
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <img class="w-100" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="">
          </div>
        </li>
        <!-- 2 -->
        <li class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <img class="w-100" src="https://images.unsplash.com/photo-1455723576895-6ab1d5abbcb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" alt="">
          </div>
          <div class="col-12 col-sm-6 d-flex justify-content-center">
            <div data-aos="fade-left">
              <h3 class="my-1">
                給家一個回憶之前，先給回憶一個家。
              </h3>
              <p>
                除了每一幅如藝術品般的繪畫、攝影作品，<br>
                每一張紀錄珍貴時刻的相片，都值得以最好的方式融入生活之中。
              </p>
            </div>
          </div>
        </li>
        <!-- 3 -->
        <li class="row align-items-center mb-3">
          <div class="col-12 col-sm-6 d-flex justify-content-center">
            <div data-aos="fade-right">
              <h3 class="my-1">
                做自己的生活風格師 !
              </h3>
              <p>
                框住美好不該是設限，<br>
                而是延伸局部想像，拼湊創意無限 ∞
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <img class="w-100" src="https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="">
          </div>
        </li>
      </ul>
    </section>
    <!-- index content end -->
  </div>
</template>

<style scoped>
  .home-bgdImg {
    background-image: url(https://images.unsplash.com/photo-1557136806-3e2416df2224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80);
  }
</style>
