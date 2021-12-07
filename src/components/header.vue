<template>
  <header id="header" class="navbar">
    <object data="avatar.jpg" class="navbar-brand" type="image/jpg">
      <h1 src="dafault.jpg" id="title" class="navbar-item"></h1>
    </object>

    <nav class="switchtabs" id="hiddenMob">
      <div class="footerContainer">
        <router-link class="links" :to="{ name: 'Home' }" id="home"
          >Home</router-link
        >

        <router-link class="links" :to="{ name: 'Search' }" id="search"
          >Search
        </router-link>
      </div>
    </nav>
    <router-link :to="{ name: 'SignUp'}" class="navbar-end"><i id="user" class="fas fa-user-circle"></i></router-link>
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
