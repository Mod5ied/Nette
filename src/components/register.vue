<template>
  <div id="main">
    <span class="circle"></span>
    <div class="mainContainer">
      <span id="titleSpan">
        <h1 id="title">{{ title }}</h1>
        <ion-icon class="ion" name="close"></ion-icon>
      </span>
      <form id="form">
        <span class="input">
          <ion-icon class="ion" name="person"></ion-icon>
          <input type="text" class="inputBox" placeholder="Firstname" />
        </span>
        <span class="input lastname">
          <ion-icon class="ion" name="person"></ion-icon>
          <input type="text" class="inputBox" placeholder="Lastname"
        /></span>
        <span class="input email">
          <ion-icon class="ion" name="at"></ion-icon>
          <input type="email" class="inputBox" placeholder="Email"
        /></span>
        <button type="submit" class="formBtn">SIGN UP</button>
      </form>
      <p id="footer">
        Already a member?
        <router-link :to="{ name: 'SignIn' }" class="route">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let title = ref("Sign Up");
    return { title };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/signUp-In.scss";
</style>
