<template>
  <v-app>
    <AppBar />
    <v-layout class="content-leyout">
      <RouterView :key="$route.path" />
    </v-layout>
  </v-app>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
</script>

<style scoped>
.content-leyout {
  background-color: rgb(72, 72, 73);
}

@media screen and (max-width: 1200px) {
  nav > a {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .logo > a > img {
    margin-left: 0;
  }
}

@media screen and (max-width: 850px) {
  nav > a {
    font-size: 0.8rem;
  }
  .logo {
    display: none;
  }
}
</style>
