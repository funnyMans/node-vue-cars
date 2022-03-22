<template>
  <v-app-bar color="teal-darken-4" class="text-white bg-dark">
    <div class="logo">
      <router-link to="/"
        ><img src="/wheel-svgrepo-com.svg" alt="" />Top Cars</router-link
      >
    </div>
    <nav>
      <RouterLink
        v-for="(brand, idx) in brands"
        :key="idx"
        :to="'/cars/' + brand.toLowerCase()"
        >{{ brand }}</RouterLink
      >
    </nav>
  </v-app-bar>
</template>
<script setup>
import axios from "axios";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";

const store = useStore();
const brands = computed(() => store.getters.getAllMakes);

onMounted(() => {
  const getBrandsUrl = `http://localhost:8080/api/v1/cars/brands`;
  axios
    .get(getBrandsUrl)
    .then((res) => {
      store.dispatch("setBrands", res.data);
    })
    .catch((err) => console.log(err));
});
</script>

<style scoped>
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
.logo {
  width: 20%;
}
.logo > a {
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 6px;
  color: black;
  font-family: "Times New Roman", Times, serif;
  text-decoration: none !important;
  filter: invert(60%) sepia(30%) saturate(5623%) hue-rotate(157deg)
    brightness(89%) contrast(101%);
}
.logo > a > img {
  width: 10%;
  cursor: pointer;
  color: white;
}
.bg-dark {
  background-color: rgb(231, 231, 233);
  height: 4rem !important;
}
</style>
