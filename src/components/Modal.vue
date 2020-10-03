<template>
  <transition name="section" v-cloak>
    <div class="section-overlay">
      <img class="section-parts-l" src="../assets/img/img_sf_parts1.svg" alt="">
      <div class="section">
        <router-view/><!-- ここのpathを動的に変える -->
        <!-- current^=1 排他的論理和（違う方を返す演算子） -->
        <!-- メモ：<button v-on:click="current^=1">toggle</button> -->
      </div>
      <img class="section-parts-r" src="../assets/img/img_sf_parts1.svg" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
}
</script>

<style scoped>
/* オーバーレイデザイン */
.section-overlay {
  z-index: 50;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

/* SFっぽい装飾 */
.section-parts-l {
  z-index: 60;
  position: fixed;
  top: 10%;
  left: 3%;
  width: 4em;
}

.section-parts-r {
  z-index: 60;
  position: fixed;
  bottom: 10%;
  right: 3%;
  width: 4em;
  transform: scale(-1, -1);
}

@media all and (min-width: 768px) {
  .section-parts-l {
    width: 8em;
  }

  .section-parts-r {
    width: 8em;
  }
}

/* スクロール有コンテンツ */
.section {
  position: fixed;
  top: 11%;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translateZ(0);
  width: 90%;
  height: 85%;
  margin: auto;
  background: rgba(13, 40, 46, .9);
  border: 2px solid rgba(110, 201, 232, .6);
  box-shadow: 0 0 8px 3px #6ec9e8 inset;
}

/* スクロールバーの横幅指定 */
.section::-webkit-scrollbar {
  width: .3em;
}

/* スクロールバーの背景色 */
.section::-webkit-scrollbar-track {
  background: rgba(13, 40, 46, .9);
}

/* スクロールバーの色 */
.section::-webkit-scrollbar-thumb {
  background: #6ec9e8;
}

/* アニメーション */
.section-enter-active, .section-leave-active {
  transition: opacity .5s;
}

.section-enter, .section-leave-to {
  opacity: 0;
}
</style>