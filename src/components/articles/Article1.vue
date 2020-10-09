<template v-slot:page1>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">ディレクション経験</h3>
      <p>
        アダルト系ソーシャルゲームのプランナーおよびディレクター経験2年。<br>
        主にゲーム内のUX改善や、企画と納品のスケジュール管理を行う。<br>
        また、レベルデザイン作業効率化のためのツールをExcelで制作、<br>
        ゲーム内広告のために簡易的にサイトを制作するなどの業務も並行する。
      </p>

      <a href="https://leveldrain.sumomo.ne.jp/PokemonButtleJS/Specification.xlsx" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>Excel<br>
                初代ポ〇モンバトル（仕様書）<br>
                ※ クリックでExcelファイルをダウンロードできます
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_pokemon_excel.jpg" alt="">
        </div>
      </a>

      <a href="https://leveldrain.sumomo.ne.jp/PokemonButtleJS/" target="_blank" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>JavaScript(ES5)<br>
                初代ポ〇モンバトル（ゲーム本体）</p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_pokemon_js.jpg" alt="">
        </div>
      </a>

      <a href="https://www.slideshare.net/YukiSamuraki/ss-212325102" target="_blank"
         class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                LT登壇資料<br>
                ソシャゲのUX改善について
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_social_game.jpg" alt="">
        </div>
      </a>

      <a href="https://leveldrain.sumomo.ne.jp/Portfolio/FEIF_calc.xlsx" target="_blank" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                自作レベルデザインツール（Excel）<br>
                現場で制作していたレベルデザイン効率化ツールのサンプルです。<br>
                ※ クリックでExcelファイルをダウンロードできます
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_level_design.jpg" alt="">
        </div>
      </a>
    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article1",
}
</script>