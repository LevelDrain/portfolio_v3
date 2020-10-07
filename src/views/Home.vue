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
              <div class="slider-inner">
                <font-awesome-icon class="fa-icon" :icon="['fab','twitter-square']"/>
              </div>
            </slide>
            <slide>
              <div class="slider-inner">
                <div class="slider-txt">frontend</div>
                <img src="../assets/img/img_work_geostorm.jpg" alt="" class="slider-banner">
              </div>
            </slide>
            <slide>
              <div class="slider-inner">
                Slide3
              </div>
            </slide>
          </carousel>
        </div>

        <div class="main-menu-item sp-hide">
          <carousel ref="carousel" :per-page="1" :navigation-enabled="true"
                    :navigation-prev-label="navigationPrev" :navigation-next-label="navigationNext" @pageChange="test">
            <slide>
              <div class="slider-inner">
                <font-awesome-icon class="fa-icon" :icon="['fab','twitter-square']"/>
              </div>
            </slide>
            <slide>
              <div class="slider-inner">
                <div class="slider-txt">frontend</div>
                <img src="../assets/img/img_work_geostorm.jpg" alt="" class="slider-banner">
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
      return '<img src="' + right + '" width="30em" style="filter: drop-shadow(0 3px 3px #000);">'
    },
    navigationPrev() {
      const left = require('../assets/img/arrow_left.png')
      return '<img src="' + left + '" width="30em" style="filter: drop-shadow(0 3px 3px #000);">'
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
  background: #333333;
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
    background: #333333;
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
  background: rgba(13, 40, 46, 0.5);
  box-shadow: 0 0 8px 3px #666 inset;
}

.pc-hide {
  display: none;
}

@media all and (min-width: 767px) {
  .main-menu-item {
    display: flex;
    width: 800px;
    height: 100%;
    background: rgba(13, 40, 46, 0.5);
    box-shadow: 0 0 8px 3px #6ec9e8 inset;
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
  background: #ccc;
  box-sizing: border-box;
  /* カルーセル全長 */
  width: 124px; /* 表示は2倍 */
  height: 400px;
}

.slider-inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ec9e8;
  width: 100%;
  height: 100%;
}

.slider-txt {
  z-index: 50;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: rgba(244, 64, 38, .7);
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
    background: #ccc;
    box-sizing: border-box;
    /* カルーセル全長 */
    width: 230px; /* 表示は3倍 */
    height: 400px;
  }

  .slider-inner {
    position: relative;
    background-color: #62caaa;
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
    justify-content: center;
    align-items: center;
    width: 15em;
    height: 400px;
    background-color: rgba(244, 64, 38, .7);
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
