<template v-slot:page3>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">Creator Profile</h3>
      <div class="img-container">
        <img src="./img/my_icon.png" alt="leveldrain" width="170em">
      </div>

      <div class="icon-container">
        <a href="mailto:drain2291@gmail.com">
          <font-awesome-icon class="fa-icon" :icon="['far','envelope']"/>
        </a>
        <a href="https://twitter.com/to_next_level" target="_blank">
          <font-awesome-icon class="fa-icon" :icon="['fab','twitter-square']"/>
        </a>
        <a href="https://www.facebook.com/darkmatter77" target="_blank">
          <font-awesome-icon class="fa-icon" :icon="['fab','facebook-square']"/>
        </a>
        <a href="https://github.com/LevelDrain/portfolio_v3" target="_blank">
          <font-awesome-icon class="fa-icon" :icon="['fab','github-square']"/>
        </a>
      </div>

      <p>上島の弟子。<br>
        活動名 Level Drain、本名「佐村木 友紀（Yuki Samuraki）」。<br>
        アダルト系ソーシャルゲームのディレクターからフロントエンドエンジニアになる。<br>
        佐村木は全国70人程度のレア苗字。
      </p>
      <p>ディレクターのバックグラウンドとエンジニアのスキルを持つ。<br>
        趣味としての目標はCGクリエイター。</p>

      <div class="card-container">
        <div class="card-origin">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/PbuMpEVKbFg" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>
      <div class="card-container">
        <div class="card-origin">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/DUcEZpyQgSo" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>

      <h3 class="headline">Philosophy</h3>

      <h4 class="headline-lv2">ささやかな気配り</h4>
      <p>「ありがとう」「ごめんなさい」、それと主体性。</p>

      <h4 class="headline-lv2">細かい作業を疎かにしない</h4>
      <p>仕上がりは依頼されたクオリティの +α を目指す。</p>

      <h4 class="headline-lv2">楽しもうという姿勢</h4>
      <p>何よりも仕事に誇りを持って取り組めるかどうか。</p>

      <h3 class="headline">Career</h3>

      <!-- TODO:Vue.jsの良さが出てないので、mixinか何かでテンプレ作ってレスポンシブ対応 -->
      <div class="row justify-content-center">
        <div class="col-11">
          <table class="career-table pc-show">
            <tr>
              <th>2009年</th>
              <td>脳科学者になりたいと思い、長浜バイオ大学に入学。<br>
                在学中に統計学や生命情報科学、3DCGに興味を持つ。実験に挫折。
              </td>
            </tr>
            <tr>
              <th>2013年</th>
              <td>奈良先端科学技術大学院大学で生命情報科学の研究室に入る。<br>
                実験データのデータ解析を行う。
              </td>
            </tr>
            <tr>
              <th>2015年</th>
              <td>アミューズメント系企業に入社。データ分析の経験から、ソーシャルゲームのパラメータ調整を行う。<br>
                GUIの設計やWebページ分析業務、ディレクション等を行っていた。
              </td>
            </tr>
            <tr>
              <th>2017年</th>
              <td>制作の方に進むべく全財産を投資し、京都コンピュータ学院に入学。</td>
            </tr>
            <tr>
              <th>2020年</th>
              <td>ベンチャーSIer のWeb開発者としてアシスタントからスタート。</td>
            </tr>
          </table>

          <!-- スマホ用 -->
          <table class="career-table sp-show">
            <tr>
              <th>2009年</th>
            </tr>
            <tr>
              <td>脳科学者になりたいと思い、長浜バイオ大学に入学。<br>
                在学中に統計学や生命情報科学、3DCGに興味を持つ。実験に挫折。
              </td>
            <tr>
              <th>2013年</th>
            </tr>
            <tr>
              <td>奈良先端科学技術大学院大学で生命情報科学の研究室に入る。<br>
                実験データのデータ解析を行う。
              </td>
            </tr>
            <tr>
              <th>2015年</th>
            </tr>
            <tr>
              <td>アミューズメント系企業に入社。データ分析の経験から、ソーシャルゲームのパラメータ調整を行う。<br>
                GUIの設計やWebページ分析業務、ディレクション等を行っていた。
              </td>
            </tr>
            <tr>
              <th>2017年</th>
            </tr>
            <tr>
              <td>制作の方に進むべく全財産を投資し、京都コンピュータ学院に入学。</td>
            </tr>
            <tr>
              <th>2020年</th>
            </tr>
            <tr>
              <td>ベンチャーSIer のWeb開発者としてアシスタントからスタート。</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article4",
}
</script>