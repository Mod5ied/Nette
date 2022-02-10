<script lang="ts">
import { defineComponent, ref } from "vue";
// import HomepageVue from "./views/Homepage.vue";
export default defineComponent({
  data() {
    return {};
  },
});
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "./scss/_presets.scss";
@media screen and (min-width: 1024px) {
  #sec3 {
    @include flexLayout(column);
    @include row(center);
    @include position(relative, 5);
    gap: 1.5rem;
    flex: 90%;
    padding: 2rem;
    .stack {
      @include flexLayout(row wrap);
      @include row(space-around);
      gap: 2rem;
      width: 80%;
      margin: 0 auto;
      padding: 0.5rem;
      list-style: none;

      .newList {
        @include dimension(15rem, 15rem);
        list-style: none !important;
      }
      .newImage {
        @include gridCenter;
        @include dimension(100%, 100%);
        border-radius: 0.5rem;
      }
    }
  }
}
@media screen and (max-width: 1020px) {
  #sec3 {
    @include flexLayout(column);
    @include row(center);
    @include position(relative, 5);
    gap: 1.5rem;
    flex: 90%;
    padding: 2rem;
    .stack {
      @include flexLayout(row);
      @include row(flex-start);
      gap: 2rem;
      width: 80%;
      list-style: none;
      overflow: scroll;
      overflow-y: hidden;

      .newList {
        min-width: 40%;
        list-style: none !important;
        .newImage {
          position: relative;
          margin-left: 18rem;
          @include gridCenter;
          @include dimension(100%, 100%);
          border-radius: 0.5rem;
        }
      }
    }
  }
}
.gallery {
  @include position(relative, 5);
  padding: 0.5rem;
  width: 85%;

  .galleryContainer {
    @include flexLayout(row wrap);
    @include row(center);
    max-width: 100%;
    gap: 2rem;
    list-style: none;

    .listTag {
      @include flexLayout(column);
      @include column(center);
      gap: 0.3rem;
      max-width: 45%;
      min-width: 45%;
      height: 15rem;
      border-radius: 0.4rem;
      outline: 1px solid #00800070;
      overflow: hidden;

      .image2 {
        @include dimension(100%, 100%);
      }
      p {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
