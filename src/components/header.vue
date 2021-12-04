<template>
  <header id="header" class="navbar has-shadow">
    <i class="navbar-brand">
      <h1 id="title" class="navbar-item">{{ title }}</h1></i
    >
    <nav class="switchtabs" id="hiddenMob">
      <div class="footerContainer">
        <router-link :to="{ name: 'Home' }" id="home">Home</router-link>

        <router-link :to="{ name: 'Search' }" id="search">
          Search
        </router-link>
      </div>
    </nav>
    <i class="navbar-end"><i id="user" class="fas fa-user-circle"></i></i>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    title: {
      default: true,
      type: String as PropType<String>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/head-foot.scss";
</style>
