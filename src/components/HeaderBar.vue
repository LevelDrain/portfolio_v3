<template>
  <nav class="navbar navbar-dark nav-color">
    <router-link class="navbar-brand ml-2" to="/">レベルの箱</router-link>

    <ul class="navbar-nav d-flex flex-row">
      <!-- <router-link tag="li" class="nav-link nav-item mr-2 font-size" v-show="this.$store.state.inHome" to="/">Home</router-link>-->
      <!--      <router-link tag="li" class="nav-link nav-item mr-2 font-size" v-show="this.$store.state.inWork" to="/works">Works</router-link>-->
      <img src="../assets/img/img_close.svg" alt="" v-show="this.$store.state.showSection" @click="close"
           class="close-button">
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    close() {
      this.$router.push('/')//閉じてリセット
      this.$store.commit('closeSection')
    }
  }
}
</script>

<style scoped>
.nav-color {
  background: rgba(0, 0, 0, .7);
}

.font-size {
  opacity: .5;
}

.close-button {
  z-index: 100;
  display: block;
  width: 2em;
  height: 2em;
  margin: auto 1em;
  animation: shadow 3s infinite alternate;
}

@-webkit-keyframes shadow {
  0% {
    opacity: .5;
  }
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 3px #6ec9e8);
  }
}

@keyframes shadow {
  0% {
    opacity: .5;
  }
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 3px #6ec9e8);
  }
}

.navbar {
  padding: .5rem 1rem;
}

@media all and (min-width: 768px) {
  .navbar {
    padding: .5rem 8rem;
  }
}
</style>