<template>
  <Layout />
</template>

<script setup>
import axios from "axios";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import Layout from "./layout/Layout.vue";

const store = useStore();

onBeforeMount(() => {
  const getCarsUrL = `http://localhost:8080/api/v1/cars`;
  axios.get(getCarsUrL).then((data) => {
    store.dispatch("setCarsData", data);
  });
});
</script>

<style>
@import "@/assets/base.css";

body::-webkit-scrollbar {
  display: none !important;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem, 2rem;
  font-weight: normal;
  overflow-y: scroll;
}
</style>
