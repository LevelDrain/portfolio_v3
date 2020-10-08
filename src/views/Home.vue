<template>
  <div class="container-fluid">
    <Modal v-show="this.$store.state.showSection"/>
    <div class="main-menu">
      <div class="main-menu-inner">
        <!-- 本文枠 -->

        <!-- https://www.kabanoki.net/4898/ -->
        <!-- https://qiita.com/weekendhikach/items/667aa5eee521f6bbd8ef -->

        <div class="main-menu-item pc-hide">
          <carousel ref="carousel" :per-page="1" :navigation-enabled="true"
                    :navigation-prev-label="navigationPrev" :navigation-next-label="navigationNext" @pageChange="test">
            <slide>
              <div class="slider-inner" @click="openLink('article1')">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">Frontend</h3>
                  <p>
                    Markup × jQuery<br>
                    Vue.js × Three.js
                  </p>
                  <p>
                    パートタイムでの<br>
                    開発経験あり
                  </p>
                </div>
                <img src="../assets/img/banner_2_pc.png" alt="" class="slider-banner">
              </div>
            </slide>

            <slide>
              <div class="slider-inner">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">Direction</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_4_pc.png" alt="" class="slider-banner">
              </div>
            </slide>

            <slide>
              <div class="slider-inner">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">ServerSide</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_3_pc.png" alt="" class="slider-banner">
              </div>
            </slide>

            <slide>
              <div class="slider-inner">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">Profile</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_1_pc.png" alt="" class="slider-banner">
              </div>
            </slide>
          </carousel>
        </div>

        <div class="main-menu-item sp-hide">
          <carousel ref="carousel" :per-page="1" :navigation-enabled="true"
                    :navigation-prev-label="navigationPrev" :navigation-next-label="navigationNext" @pageChange="test">
            <slide>
              <div class="slider-inner" @click="openLink('article1')">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">Frontend</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_2_sp.png" alt="" class="slider-banner">
              </div>
            </slide>

            <slide>
              <div class="slider-inner">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">Direction</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_4_sp.png" alt="" class="slider-banner">
              </div>
            </slide>

            <slide>
              <div class="slider-inner">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">ServerSide</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_3_sp.png" alt="" class="slider-banner">
              </div>
            </slide>

            <slide>
              <div class="slider-inner">
                <div class="slider-txt">
                  <h3 class="slider-txt-ttl">Profile</h3>
                  <p>自信作を集めました</p>
                </div>
                <img src="../assets/img/banner_1_sp.png" alt="" class="slider-banner">
              </div>
            </slide>
          </carousel>
        </div>

        <!-- //本文枠 -->
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue"

export default {
  name: "Home",
  components: {
    Modal,
  },
  data() {
    return {
      showSection: this.$store.state.showSection,
    };
  },
  computed: {
    navigationNext() {
      const right = require('../assets/img/arrow_right.png')
      return '<img src="' + right + '" width="30em">'
    },
    navigationPrev() {
      const left = require('../assets/img/arrow_left.png')
      return '<img src="' + left + '" width="30em">'
    },
  },
  methods: {
    openLink(id) {
      //遷移（遷移と同時にモーダルを開く仕様 → router参照）
      this.$router.push("/" + id);
    },
    test() {
      console.log('クリック')
    }
  }
}
</script>

<style scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-menu-inner {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  /*background: #333333;*/
}

/* メニューの位置調整 */
.main-menu-inner {
  overflow-y: auto;
  overflow-x: hidden;
}

@media all and (min-width: 767px) {
  .main-menu-inner {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8%;
    width: 100%;
    height: 90%;
    /*background: #333333;*/
    padding: 5%;
  }
}

/* コンテンツ */
.main-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 320px;
  height: 700px;
  padding: 1em;
  /*background: #6ec9e8;*/
  filter: drop-shadow(0 3px 3px #000);
}

.pc-hide {
  display: none;
}

@media all and (min-width: 767px) {
  .main-menu-item {
    display: flex;
    width: 800px;
    height: 100%;
    /*background: #6ec9e8;*/
    border: 2px solid rgba(255, 255, 255, .1);
  }

  .sp-hide {
    display: none;
  }
}

/* カルーセル */
/*.VueCarousel {*/
/*  height: 500px;*/
/*}*/
.VueCarousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  box-sizing: border-box;
  /* カルーセル全長 */
  /* width: 248px; */
  /* これを記事の枚数で割ったものが指定幅 */
  width: 62px;
  height: 400px;
}

.slider-inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: #6ec9e8;*/
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 3px 3px #000);
}

.slider-txt {
  z-index: 50;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: rgba(0, 0, 0, .7);
}

.slider-txt-ttl {
  font-size: 23px;
  margin-bottom: .5em;
}

.slider-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 248px;
  height: 400px;
}

@media all and (min-width: 767px) {
  .VueCarousel-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    box-sizing: border-box;
    /* カルーセル全長 */
    /* width: 690px; */
    /* これを記事の枚数で割ったものが指定幅 */
    width: 176px;
    height: 400px;
  }

  .slider-inner {
    position: relative;
    /*background-color: #62caaa;*/
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .slider-txt {
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 400px;
    background-color: rgba(0, 0, 0, .7);
  }

  .slider-txt-ttl {
    font-size: 23px;
    margin-bottom: 1em;
  }

  .slider-banner {
    position: absolute;
    top: 0;
    left: unset;
    right: 0;
    width: 690px;
    height: 400px;
  }
}
</style>
