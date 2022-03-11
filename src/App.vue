<template>
  <Layout />
</template>

<script setup>
import Layout from "./layout/Layout.vue";
import PageNotFound from "./views/PageNotFound.vue";
</script>

<style>
@import "@/assets/base.css";

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem, 2rem;
  font-weight: normal;
}
</style>
