<template>
  <div id="main">
    <img loading="lazy" src="../assets/image4.jpg" id="main-img" alt="" />
    <Header :title="title" />
    <form @submit.prevent="fetchImage">
      <span class="nav">
        <img src="../assets/search_black_24dp.svg" class="searchBtn" />
        <input
          type="text"
          class="inputBox"
          placeholder="Search for anything!"
          v-model="userInput"
          required="true"
        />
      </span>
    </form>
    <section id="gallery" class="gallery">
      <ul class="galleryContainer" id="lista">
        <!-- SECTION BELOW IS HIDDEN ONCE A SEARCH IS MADE -->
        <li class="hideImages">
          <img src="../assets/image1.jpg" alt="" />
          <!-- <p></p> -->
        </li>
        <li class="hideImages">
          <img src="../assets/image4.jpg" alt="" />
          <!-- <p></p> -->
        </li>
        <li class="hideImages">
          <img src="../assets/image5.jpg" alt="" />
          <!-- <p></p> -->
        </li>
        <li class="hideImages">
          <img src="../assets/image6.jpg" alt="" />
          <!-- <p></p> -->
        </li>
        <li class="hideImages">
          <img src="../assets/image7.jpg" alt="" />
          <!-- <p></p> -->
        </li>
        <li class="hideImages">
          <img src="../assets/image3.jpg" alt="" />
          <!-- <p></p> -->
        </li>
      </ul>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
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
    onUnmounted(() => {
      methods.hideImages();
      // TODO -should remove the images before component is scraped
    });
    const title = ref<String>("𝘕𝘦𝘵𝘵𝘦");
    let userInput = ref("Search for anything!");
    const accessKey = ref<String>(
      `hV32rTvyumuVXBlHIJ4SchuzraqM1pjx8oWjab8bIF8`
    );
    let endPoint = `https://api.unsplash.com/search/photos?page=1&per_page=6&query=${userInput.value}&orientation=squarish&client_id=${accessKey.value}`;
    const generateTag = async (item: any) => {
      const images = await item;
      images.forEach((image: any) => {
        const listTag = document.createElement("li");
        listTag.classList.add("listTag");

        const imgTag = document.createElement("img");
        imgTag.src = image.urls.regular;
        imgTag.alt = image.alt_description;
        imgTag.classList.add("image2");

        listTag.appendChild(imgTag);
        document.getElementById("lista")!.append(listTag);
      });
    };
    const methods = reactive({
      fetchImage: async () => {
        methods.hideImages();
        try {
          const resp = await fetch(unref(endPoint));
          if (!resp.ok) {
            throw Error("Failed to fetch!");
          }
          const data = await resp.json();
          generateTag(data.results);
        } catch (err) {
          console.error(err);
        }
      },
      hideImages: async () => {
        let list = document.querySelectorAll(".hideImages");
        list.forEach((li) => li.remove());
      },
    });

    return {
      title,
      userInput,
      ...toRefs(methods),
    };
  },
  components: { Header, Footer },
});
</script>

<style lang="scss" scoped>
@import "../scss/search.scss";
</style>
