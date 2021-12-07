<template>
  <div id="main">
    <span class="circle"></span>
    <div class="mainContainer">
      <span id="titleSpan">
        <h1 id="title">{{ title }}</h1>
        <i class="fas fa-times ion"></i>
      </span>
      <form id="form">
        <span class="input email">
          <i class="fas fa-at ion"></i>
          <input type="email" class="inputBox" placeholder="Email"
        /></span>
        <span class="input password">
          <i class="fas fa-lock ion"></i>
          <input type="password" class="inputBox" placeholder="Password" />
        </span>
        <button type="submit" class="formBtn">SIGN UP</button>
      </form>
      <p id="footer">
        Don't have an account yet?
        <router-link :to="{ name: 'SignUp' }" class="route">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let title = ref("Sign In");
    return {
      title,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/signUp-In.scss";
</style>
