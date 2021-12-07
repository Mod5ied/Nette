<template>
  <div id="main">
    <img src="../assets/image4.jpg" id="main-img" alt="" />
    <Header :title="title" />
    <form>
      <span class="nav">
        <img src="../assets/search_black_24dp.svg" class="searchBtn" />
        <input
          type="text"
          class="inputBox"
          placeholder="Search for anything!"
        />
      </span>
    </form>
    <section id="gallery" class="gallery">
      <ul class="galleryContainer">
        <li>
          <img src="../assets/image1.jpg" alt="" />
          <p>Image One</p>
        </li>
        <li>Y</li>
        <li>Z</li>
        <li>M</li>
        <li>M</li>
        <li>M</li>
        <li>M</li>
        <li>M</li>
      </ul>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default defineComponent({
  setup() {
    const title = ref<String>("𝘕𝘦𝘵𝘵𝘦");
    return {
      title,
    };
  },
  components: { Header, Footer },
});
</script>

<style lang="scss" scoped>
@import "../scss/search.scss";
</style>
