<template v-slot:page3>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">サーバサイド</h3>
      <p>
        BladeをVue.jsで実装したり、apiの実装をしたりする。<br>
        業務では予約アプリの一部を担当。<br>
        生のPHPの経験は学生時代からあり、Laravelより長い。
      </p>

      <a href="https://leveldrain.sumomo.ne.jp/beginnernovels/" target="_blank" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                JavaScript / PHP<br>
                Webビジュアルノベルツール（PCサイト）<br>
                ※ ペアプログラミングによる共同作品<br>
                （<a href="https://leveldrain.sumomo.ne.jp/beginnernovels/project2019.pptx">発表資料ダウンロード</a>）
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_visual_novel.jpg" alt="">
        </div>
      </a>

      <a href="https://leveldrain.sumomo.ne.jp/intern2019/" target="_blank"
         class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                PHP<br>
                インターンシップ制作物<br>
                「ひみつにっき」（PCサイト）
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_work_crud.jpg" alt="">
        </div>
      </a>

      <a href="https://leveldrain.sumomo.ne.jp/ZodiacPuzzleApp/" target="_blank" class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                jQuery / PHP<br>
                星座学習サイト（PCサイト）<br>
                2年前の作品。<br>
                ※ ペアプログラミングによる共同作品
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_work_zodiac.jpg" alt="">
        </div>
      </a>

      <a href="https://leveldrain.sumomo.ne.jp/UploadService/" target="_blank"
         class="card-container">
        <div class="card-origin">
          <div class="card-body">
            <div class="card-text">
              <p>
                PHP<br>
                動画投稿サイト（PCサイト）<br>
                2年前の作品。
              </p>
            </div>
          </div>
          <img class="card-img-top thumbnail" src="./img/img_work_upload.jpg" alt="">
        </div>
      </a>
    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article3",
}
</script>