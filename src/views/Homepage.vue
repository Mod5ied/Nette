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
        <img src="../assets/palette_black_24dp.svg" class="image" />
        <span class="imageDesc">ART</span>
      </div>
      <div class="cardCover two">
        <img src="../assets/pets_black_24dp.svg" class="image">
        <span class="imageDesc">PETS</span>
      </div>
      <div class="cardCover three">
        <img src="../assets/houses_black_24dp.svg" class="image"/>
        <span class="imageDesc">BUILDINGS</span>
      </div>
      <div class="cardCover four">
        <img src="../assets/park_black_24dp.svg" class="image">
        <span class="imageDesc">PLANTS</span>
      </div>
      <div class="cardCover four">
        <ion-icon name="logo-model-s" id="image"></ion-icon>
        <span class="imageDesc">CARS</span>
      </div>
    </section>
    <section id="sec3">
      <h3>Lorem fiverso dolor sit</h3>
      <div class="stack">
        <li class="image">Image1</li>
        <li class="image">Image2</li>
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
