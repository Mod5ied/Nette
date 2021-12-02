<template>
  <div id="main">
    <Header :title="title" />
    <section id="sec1">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est a dolorum
        repellendus asperiores, tempora quidem nostrum accusamus repellat cum
        sapiente.
      </p>
    </section>
    <section id="sec2">
      <div class="cardCover one">
        <img src="../assets/palette_black_24dp.svg" class="image1" />
        <span class="imageDesc">ART</span>
      </div>
      <div class="cardCover two">
        <img src="../assets/pets_black_24dp.svg" class="image1" />
        <span class="imageDesc">PETS</span>
      </div>
      <div class="cardCover three">
        <img src="../assets/houses_black_24dp.svg" class="image1" />
        <span class="imageDesc">BUILDINGS</span>
      </div>
      <div class="cardCover ">
        <img src="../assets/park_black_24dp.svg" class="image1" />
        <span class="imageDesc">PLANTS</span>
      </div>
      <div class="cardCover four">
        <ion-icon name="logo-model-s" id="image"></ion-icon>
        <span class="imageDesc">CARS</span>
      </div>
    </section>
    <section id="sec3">
      <h2>Lorem ipsum dolor, sit amet caonsectetur.</h2>
      <div class="stack">
        <!-- <img src="../assets/paint_logo-11.jpg" class="image2" /> -->
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
