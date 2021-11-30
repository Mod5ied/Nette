<template>
  <footer class="footer" id="footer">
    <div class="footerContainer">
      <router-link :to="{ name: 'Home' }" id="home"
        ><img src="../assets/home_black_24dp.svg"
      /></router-link>

      <router-link :to="{ name: 'Search' }" id="search">
        <img
          src="../assets/search_black_24dp.svg
      "
        />
      </router-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/head-foot.scss";
</style>
