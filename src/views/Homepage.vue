<template>
  <div id="main">
    <img loading="lazy" src="../assets/image4.jpg" id="main-img" alt="" />
    <Header :title="title" />
    <section id="sec1">
      <p>
        Searching for photo collecions is as easy as typing in some few words
        and baam! your gallery. Go through our large repository of images and
        find the pixel-perfect photo you desire for your personal projects or
        wallpaper - proudly by Nette.
      </p>
    </section>
    <section class="image" id="mobilehidden">
      <!-- <img src="../assets/IMG_20200701_225758.jpg" alt="" /> -->
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
      <ul class="stack" id="list"></ul>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  unref,
} from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      methods.fetchImages();
      // TODO -should call and mount images upon component load
    });
    onUnmounted(() => {
      methods.removeTag();
      // TODO -should remove the images before component is scraped
    });
    const title = ref<String>("𝘕𝘦𝘵𝘵𝘦");
    const searchString = "Books";
    const accessKey = ref<String>(
      `hV32rTvyumuVXBlHIJ4SchuzraqM1pjx8oWjab8bIF8`
    );
    const endPoint = `https://api.unsplash.com/search/photos?page=1&per_page=6&query=${searchString}&orientation=squarish&client_id=${accessKey.value}`;

    const generateTag = async (item: any) => {
      const images = item;
      images.forEach((image: any) => {
        const listTag = document.createElement("li");
        listTag.classList.add("newList");

        const imgTag = document.createElement("img");
        imgTag.src = image.urls.regular;
        imgTag.alt = image.alt_description;
        imgTag.classList.add("newImage");

        listTag.appendChild(imgTag);
        document.querySelector("#list")!.append(listTag); //ignore v-DOM probs.
      });
    };
    const methods = reactive({
      fetchImages: async () => {
        methods.removeTag();
        try {
          const resp = await fetch(unref(endPoint));
          if (!resp.ok) {
            throw Error("An error occurred while fetching");
          }
          const data = await resp.json();
          generateTag(data.results);
        } catch (err) {
          console.error(err);
        }
      },
      removeTag: async () => {
        document.querySelectorAll(".stack")!.forEach((li) => li.remove());
      },
    });

    return {
      ...toRefs(methods),
      title,
    };
  },
  components: { Header, Footer },
});
</script>

<style lang="scss" scoped>
@import "../scss/home.scss";
</style>
