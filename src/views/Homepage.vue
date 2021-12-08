<template>
  <div id="main">
    <img loading="lazy" src="../assets/image4.jpg" id="main-img" alt="" />
    <Header :title="title" />
    <section id="sec1">
      <p>
        Searching for photo collecions is as easy as typing in some few words
        and baam! your gallery. Go through our large repository of images and
        find the pixel-perfect photo you desire for your personal projects or wallpaper - proudly by Nette.
      </p>
    </section>
    <section class="image" id="mobilehidden">
      <img src="../assets/IMG_20200701_225758.jpg" alt="" />
    </section>
    <section id="sec2">
      <div class="cardCover one">
        <i class="fas fa-palette image1"></i>
        <span class="imageDesc">Arts</span>
      </div>
      <div class="cardCover two">
        <i class="fas fa-paw image1"></i>
        <span class="imageDesc">Pets</span>
      </div>
      <div class="cardCover three">
        <i class="far fa-building image1"></i>
        <span class="imageDesc">Houses</span>
      </div>
      <div class="cardCover">
        <i class="fab fa-pagelines image1"></i>
        <span class="imageDesc">Plants</span>
      </div>
      <div class="cardCover four">
        <i class="fas fa-car image1"></i>
        <span class="imageDesc">Cars</span>
      </div>
    </section>
    <section id="sec3">
      <h2>Exhibition</h2>
      <div class="stack">
        <li class="one">
          <img src="../assets/image7.jpg" class="image2 one" />
        </li>
        <li class="two">
          <img src="../assets/image3.jpg" class="image2 two" />
        </li>
        <li class="three mobilehidden">
          <img src="../assets/image1.jpg" class="image2" />
        </li>
        <li class="four mobilehidden">
          <img src="../assets/image2.jpg" class="image2" />
        </li>
        <li class="five mobilehidden">
          <img src="../assets/image6.jpg" class="image2" />
        </li>
        <li class="six mobilehidden">
          <img src="../assets/image4.jpg" class="image2" />
        </li>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default defineComponent({
  setup() {
    const title = ref<String>("𝘕𝘦𝘵𝘵𝘦");

    const methods = reactive({})

    return {
      title,
      ...toRefs(methods)
    };
  },
  components: { Header, Footer },
});
</script>

<style lang="scss" scoped>
@import "../scss/home.scss";
</style>
