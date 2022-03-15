<template>
  <Layout />
</template>

<script setup>
import Layout from "./layout/Layout.vue";
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
