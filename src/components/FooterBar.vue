<template>
  <div class="footer-color">
    <span class="text-muted footer-text">© LevelDrain 2020</span>
  </div>
</template>

<script>
export default {
  name: "FooterBar"
}
</script>

<style scoped>
.footer-color {
  background: #ddd;
  filter: drop-shadow(0 0 3px #000);
}

.footer-text {
  font-size: .8em;
}
</style>