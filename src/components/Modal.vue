<template>
  <transition name="section" v-cloak>
    <div class="section-overlay">
      <div class="section">
        <router-view/><!-- ここのpathを動的に変える -->
        <!-- current^=1 排他的論理和（違う方を返す演算子） -->
        <!-- メモ：<button v-on:click="current^=1">toggle</button> -->
      </div>
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
  background: rgba(30, 30, 30, .9);
  border: 2px solid #ddd;
  box-shadow: 0 0 10px 3px #000 inset;
}

/* スクロールバーの横幅指定 */
.section::-webkit-scrollbar {
  width: .3em;
}

/* スクロールバーの背景色 */
.section::-webkit-scrollbar-track {
  background: rgba(60, 60, 60, .9);
}

/* スクロールバーの色 */
.section::-webkit-scrollbar-thumb {
  background: #ddd;
}

/* アニメーション */
.section-enter-active, .section-leave-active {
  transition: opacity .5s;
}

.section-enter, .section-leave-to {
  opacity: 0;
}
</style>