<template>
  <div>
    <div class="w-full flex justify-evenly">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/about">About</router-link></div>
      <div><router-link to="/list">List</router-link></div>
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
