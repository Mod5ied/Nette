<template>
  <div id="main">
    <Header :title="title" />
      <section id="sec1">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est a
          dolorum repellendus asperiores, tempora quidem nostrum accusamus
          repellat cum sapiente.
        </p>
      </section>
      <section class="image" id="mobilehidden">
        <img src="../assets/IMG_20200701_225758.jpg" alt="" />
      </section>
      <section id="sec2">
        <div class="cardCover one">
          <i class="fas fa-palette image1"></i>
          <span class="imageDesc">ART</span>
        </div>
        <div class="cardCover two">
          <i class="fas fa-paw image1"></i>
          <span class="imageDesc">PETS</span>
        </div>
        <div class="cardCover three">
          <i class="far fa-building image1"></i>
          <span class="imageDesc">HOUSES</span>
        </div>
        <div class="cardCover">
          <i class="fab fa-pagelines image1"></i>
          <span class="imageDesc">PLANTS</span>
        </div>
        <div class="cardCover four">
          <i class="fas fa-car image1"></i>
          <span class="imageDesc">CARS</span>
        </div>
      </section>
      <section id="sec3">
        <h2>Exhibition</h2>
        <div class="stack">
          <li class="image2 one">Image1</li>
          <li class="image2 two">Image2</li>
          <li class="image2 three mobilehidden">Image3</li>
          <li class="image2 four mobilehidden">Image4</li>
          <li class="image2 five mobilehidden">Image5</li>
          <li class="image2 six mobilehidden">Image6</li>
        </div>
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
@import "../scss/home.scss";
</style>
