<template>
  <div id="main">
    <span class="circle"></span>
    <div class="mainContainer">
      <span id="titleSpan">
        <h1 id="title">{{ title }}</h1>
        <ion-icon class="ion" name="close"></ion-icon>
      </span>
      <form id="form">
        <span class="input email">
          <ion-icon class="ion" name="at"></ion-icon>
          <input type="email" class="inputBox" placeholder="Email"
        /></span>
        <span class="input password">
          <ion-icon class="ion" name="lock"></ion-icon>
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
