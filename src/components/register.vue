<template>
  <div id="main">
    <span class="circle"></span>
    <div class="mainContainer">
      <span id="titleSpan">
        <h1 id="title">{{ title }}</h1>
        <router-link :to="{ name: 'Home' }">
          <i class="fas fa-times ion"> </i>
        </router-link>
      </span>
      <form id="form">
        <span class="input">
          <i class="fas fa-user-circle ion"></i>
          <input type="text" class="inputBox" placeholder="Firstname" />
        </span>
        <span class="input lastname">
          <i class="fas fa-user-circle ion"></i>
          <input type="text" class="inputBox" placeholder="Lastname"
        /></span>
        <span class="input email">
          <i class="fas fa-at ion"></i>
          <input type="email" class="inputBox" placeholder="Email"
        /></span>
        <button type="submit" @click="alertUser" class="formBtn">
          SIGN UP
        </button>
      </form>
      <p id="footer">
        Already a member?
        <router-link :to="{ name: 'SignIn' }" class="route"
          >Sign in</router-link
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let title = ref("Sign Up");
    const alertUser = () => {
      alert("Feature not implemented!");
    };
    return { title, alertUser };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/forms.scss";
</style>
