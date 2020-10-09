<template v-slot:page2>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">フロントエンド</h3>
      <p>
        JavaScript / Vue.js (Vue Router, Vuexを含む) / jQuery / Pixi.js, Three.js などのWebGL系ライブラリ<br>
        Sassやbootstrapを使用した開発経験もあるが、CSSの方が個人的に好み。
      </p>
      <p>
        エンジニアとしてスタートするためにパートタイムから始める。<br>
        業務で使用しているのは主にLaravel環境内のVue.jsであり、
        axiosなどのAPI連携まで実装経験がある。
      </p>

      <router-link to="/" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                Vue.js<br>
                レベルの箱（ポートフォリオ）
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_work_levelbox.jpg" alt="">
        </div>
      </router-link>

      <a href="https://leveldrain.sumomo.ne.jp/WebEffectGenerator/geostorm.html" target="_blank" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                JavaScript / Three.js<br>
                厨二エフェクトジェネレーター
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_work_geostorm.jpg" alt="">
        </div>
      </a>

      <a href="https://pf-ueshimalab.netlify.app/" target="_blank" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                Vue.js / Pixi.js<br>
                上島研究所（公式サイト）
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_portfolio2.jpg" alt="">
        </div>
      </a>

      <a href="https://leveldrain.sumomo.ne.jp/Portfolio/" target="_blank"
         class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                HTML / CSS / JavaScript<br>
                理性と野生（過去ポートフォリオ）
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_work_portfolio.jpg" alt="">
        </div>
      </a>
    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article2",
}
</script>