<template>
  <div class="container-fluid">
    <Modal v-show="this.$store.state.showSection"/>
    <div class="main-menu">
      <div class="main-menu-inner">
        <!-- 本文枠 -->
        <div class="main-menu-content">
          <div class="main-menu-front pc-hide">

            <!-- https://www.kabanoki.net/4898/ -->
            <!-- https://qiita.com/weekendhikach/items/667aa5eee521f6bbd8ef -->

            <carousel :per-page="1" :autoplay="true" :loop="true" :navigation-enabled="true"
                      navigation-prev-label="〈"
                      navigation-next-label="〉">
              <slide>
                <div class="slider-inner">
                  Slide1
                </div>
              </slide>
              <slide>
                <div class="slider-inner">
                  Slide2
                </div>
              </slide>
              <slide>
                <div class="slider-inner">
                  Slide3
                </div>
              </slide>
            </carousel>
          </div>

          <div class="main-menu-front sp-hide">
            テストSP
          </div>
        </div>
        <!-- //本文枠 -->
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal,
  },
  data() {
    return {
      showSection: this.$store.state.showSection
    };
  },
  methods: {
    openLink(id) {
      //遷移（遷移と同時にモーダルを開く仕様 → router参照）
      this.$router.push("/" + id);
    }
  }
};
</script>

<style scoped>
/* カルーセルサンプル */
.VueCarousel {
  height: 300px;
}

.VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide {
  height: 100% !important;
}

.VueCarousel-slide .slider-inner {
  height: 100%;
  background-color: #62caaa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  font-size: 30px;
  border-radius: 10px;
}

/* ---- */

.main-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px;
  /*background: #333333;*/
}

.main-menu-inner {
  position: fixed;
  top: 10%;
  width: 100%;
  height: 90%;
  /*background: #333333;*/
}

.main-menu-inner li {
  list-style: none;
}

/* メニューの位置調整 */
.main-menu-inner {
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10% 5%;
}

@media all and (min-width: 768px) {
  .main-menu-inner {
    padding: 5%;
  }
}

@keyframes button-animation {
  100% {
    border-bottom-color: #6ec9e8;
    border-right-color: #6ec9e8;
    border-top-color: #6ec9e8;
    border-left-color: #6ec9e8;
    width: 100%;
    height: 100%;
  }
}

.main-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 900px;
  /*background: #333333;*/
}

@media all and (min-width: 769px) {
  .main-menu-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    /*background: #333333;*/
  }
}

/* コンテンツ */
.main-menu-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 90%;
  padding: 1em;
  background: rgba(13, 40, 46, 0.5);
  box-shadow: 0 0 8px 3px #6ec9e8 inset;
}

.main-menu-front ul {
  padding-inline-start: 0;
}

.pc-hide {
  display: none;
}

@media all and (min-width: 769px) {
  .main-menu-front {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 5%;
    display: block;
    width: 30em;
    background: rgba(13, 40, 46, 0.5);
    box-shadow: 0 0 8px 3px #6ec9e8 inset;
  }

  .main-menu-front ul {
    padding-inline-start: 0;
  }

  .sp-hide {
    display: none;
  }
}
</style>
