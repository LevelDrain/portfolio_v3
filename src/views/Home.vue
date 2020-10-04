<template>
  <div class="container-fluid">
    <Modal v-show="this.$store.state.showSection"/>
    <div class="main-menu">
      <div class="main-menu-inner">
        <!-- 本文枠 -->

        <!-- https://www.kabanoki.net/4898/ -->
        <!-- https://qiita.com/weekendhikach/items/667aa5eee521f6bbd8ef -->

        <carousel class="main-menu-item pc-hide" ref="carousel" :per-page="1" :navigation-enabled="true"
                  :navigation-prev-label="navigationPrev" :navigation-next-label="navigationNext" @pageChange="test">
          <slide>
            <div class="slider-inner">
              <font-awesome-icon class="fa-icon" :icon="['fab','twitter-square']"/>
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
                Slide2
              </div>
            </slide>
          </carousel>
          <div class="about">
            自己紹介欄
          </div>
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
      const right = require('../assets/img/caret-right-solid.svg')
      return '<img src="' + right + '" width="40px">'
    },
    navigationPrev() {
      const left = require('../assets/img/caret-left-solid.svg')
      return '<img src="' + left + '" width="40px">'
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
/* カルーセルサンプル */

.VueCarousel {
  height: 500px;
}

.slider-inner{
  height: 400px;
  background-color: #62caaa;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  display: flex;
  justify-content: center;
  align-items: center;
  top: 7%;
  width: 100%;
  height: 90%;
  /*background: #333333;*/
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

/* コンテンツ */
.main-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 90%;
  height: 900px;
  padding: 1em;
  background: rgba(13, 40, 46, 0.5);
  box-shadow: 0 0 8px 3px #666 inset;
}

.pc-hide {
  display: none;
}

@media all and (min-width: 769px) {
  .main-menu-item {
    display: flex;
    width: 70em;
    height: 100%;
    background: rgba(13, 40, 46, 0.5);
    box-shadow: 0 0 8px 3px #6ec9e8 inset;
  }

  .sp-hide {
    display: none;
  }
}
</style>
