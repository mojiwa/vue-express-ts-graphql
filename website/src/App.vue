<template>
  <div>
    <div class="w-full flex justify-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import "./assets/main.css";

export default class App extends Vue {}
</script>

<style></style>
