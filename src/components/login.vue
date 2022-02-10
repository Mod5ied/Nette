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
        <span class="input email">
          <i class="fas fa-at ion"></i>
          <input type="email" class="inputBox" placeholder="Email"
        /></span>
        <span class="input password">
          <i class="fas fa-lock ion"></i>
          <input type="password" class="inputBox" placeholder="Password" />
        </span>
        <button type="submit" @click="alertUser" class="formBtn">
          SIGN UP
        </button>
      </form>
      <p id="footer">
        Don't have an account yet?
        <router-link :to="{ name: 'SignUp' }" class="route"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let title = ref("Sign In");
    const alertUser = () => {
      alert("Feature not implemented!");
    };
    return {
      title,
      alertUser,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/forms.scss";
</style>
