<template>
  <div id="app">
    <div class="h-100 main-bg">
      <header id="Header" class="fixed-top">
        <HeaderBar />
      </header>

      <!-- Three.jsコンポーネント設置予定 -->
      <BubbleEffect class="canvas-bg" />

      <main id="Main" role="main">
        <router-view />
      </main>

      <footer id="Footer" class="fixed-bottom">
        <FooterBar />
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import BubbleEffect from '@/components/Bubble.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar,
    BubbleEffect,
  },
  data() {
    return {
      showSection: this.$store.state.showSection,
      isLoading: false,
    }
  },
  created() {
    this.doLoading()
  },
  methods: {
    doLoading() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=PT+Serif&display=swap');

#app {
  font-family: 'PT Serif', 'Noto Serif JP', serif;
  text-align: center;
  color: #fff;
}

#Header {
  z-index: 200;
  font-family: 'PT Serif', 'Noto Serif JP', serif;
}

/* ※Three.jsコンポーネント設置予定 */
.canvas-bg {
  z-index: -5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#Main {
  z-index: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  font-family: 'PT Serif', 'Noto Serif JP', serif;
}

#Footer {
  z-index: 200;
  font-family: 'PT Serif', 'Noto Serif JP', serif;
}

/* モバイルの背景 */
.main-bg {
  z-index: -10;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background-image: url("./assets/img/img_bg_sp.png");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #333333;
}

@media all and (min-width: 768px) {
  .main-bg {
    z-index: -10;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-image: url("./assets/img/img_bg_pc.png");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #333333;
  }
}
</style>
