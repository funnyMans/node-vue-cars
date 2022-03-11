<template>
  <v-app>
    <v-app-bar color="teal-darken-4" class="text-white bg-dark">
      <div class="logo">
        <router-link to="/"><img src="/logo.png" alt="" /></router-link>
      </div>
      <nav>
        <RouterLink
          v-for="brand in brands"
          :to="'/cars/' + brand.toLowerCase()"
          >{{ brand }}</RouterLink
        >
      </nav>
    </v-app-bar>
    <v-layout class="content-leyout">
      <RouterView :key="$route.path" />
    </v-layout>
  </v-app>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
const state = useStore();
const brands = state.getters.getAllMakes;
</script>

<style scoped>
.bg-dark {
  background-color: rgb(231, 231, 233);
  height: 4rem !important;
}
.content-leyout {
  background-color: rgb(72, 72, 73);
}
.logo {
  margin-top: 0.7rem;
  width: 20%;
}
.logo > a > img {
  margin-left: 2rem;
  width: 100%;
  cursor: pointer;
}
nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100 !important;
}

nav > a {
  color: rgb(29, 31, 30);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.router-link-active {
  color: rgb(35, 103, 143);
  font-weight: 550;
  text-decoration: underline;
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
}
@media screen and (max-width: 550px) {
  .logo {
    display: none;
  }
}
</style>
