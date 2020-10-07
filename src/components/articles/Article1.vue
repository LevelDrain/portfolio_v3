<template v-slot:page1>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">About Skills</h3>
      <p>主な開発言語は JavaScript / PHP。<br>
        得意さ：ディレクション = フロントエンド ＞ サーバサイド<br>
        Photoshop およびイラレは趣味程度。
      </p>

      <h3 class="headline">Web Direction</h3>
      <p>アダルト系ソーシャルゲームの真面目なディレクションを2年ほど行う。<br>
        レベルデザイン（ゲームのUX調整）、UIおよび広告サイトの仕様書などを手掛ける。
      </p>
      <p>※ レアリティに関わらずキャラ 1体 20万円くらいする話、乳首が出ているキャラは google に規制される話、<br>
        ぶっちゃけ「胸が大きくくびれが良いキャラ」は破格のステータスを持たせて低確率でガチャに入れる話などなど。<br>
        気になる方はご連絡ください。
      </p>

      <div class="thumbnail-box">
        <a href="https://www.slideshare.net/YukiSamuraki/ss-212325102" target="_blank"
           class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_social_game.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>LT登壇資料<br>
                  ソシャゲの UX について</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://leveldrain.sumomo.ne.jp/Portfolio/FEIF_calc.xlsx" target="_blank" class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_level_design.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>Excel<br>
                  自作レベルデザインツール<br>
                  ※ クリックでExcelファイルをダウンロードできます
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <h3 class="headline">Frontend</h3>
      <p>JavaScript / Vue.js (Vue Router, Vuexを含む) / jQuery / Pixi.js, Three.js などのWebGL系ライブラリ<br>
        Sassやbootstrapを使用した開発経験もあるが、CSSの方が個人的に好み。
      </p>
      <p>業務で使用しているのは主にLaravel環境内のVue.jsであり、axiosなどのAPI連携まで実装経験がある。</p>
      <p>- Three.jsによる開発は特に燃える。</p>

      <div class="thumbnail-box">
        <a href="https://leveldrain.sumomo.ne.jp/WebEffectGenerator/geostorm.html" target="_blank"
           class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_work_geostorm.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>JavaScript / Three.js<br>
                  厨二エフェクトジェネレーター</p>
              </div>
            </div>
          </div>
        </a>

        <router-link to="/" class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_portfolio2.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>Vue.js / Pixi.js<br>
                  上島研究所（本サイト）</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <h3 class="headline">Web Direction + Frontend</h3>
      <p>JavaScriptによる初作品。<br>
        コードはあまりキレイではないものの、仕様書は冴えている。</p>

      <div class="thumbnail-box">
        <a href="https://leveldrain.sumomo.ne.jp/PokemonButtleJS/Specification.xlsx" class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_pokemon_excel.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>Excel<br>
                  初代ポ〇モンバトル（仕様書）<br>
                  ※ クリックでExcelファイルをダウンロードできます
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://leveldrain.sumomo.ne.jp/PokemonButtleJS/" target="_blank" class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_pokemon_js.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>JavaScript(ES5)<br>
                  初代ポ〇モンバトル（ゲーム本体）</p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <h3 class="headline">Serverside</h3>
      <p>Blade に Vue.js を突っ込んだり、CRUD の実装をしたりする。<br>
        生の PHP の経験は学生時代からあり、Laravel より若干長い。</p>

      <div class="thumbnail-box">
        <a href="https://leveldrain.sumomo.ne.jp/beginnernovels/" target="_blank"
           class="card-container">
          <div class="card-origin">
            <img class="card-img-top thumbnail" src="./img/img_visual_novel.jpg" alt="">
            <div class="card-body">
              <div class="card-text">
                <p>PHP<br>
                  Webビジュアルノベルツール</p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <h3 class="headline">Movies</h3>
      <p>実は、BlenderとUE4で動画を作ったことがあります。<br>
        本業に注力した、グラボが古いなどの壁を経て、現在趣味から再スタートしようとしております。</p>

      <div class="thumbnail-box">
        <div class="card-origin">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/PbuMpEVKbFg" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
        <div class="card-origin">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/DUcEZpyQgSo" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>

    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article1",
}
</script>