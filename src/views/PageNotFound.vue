<template>
  <div class="error-page">
    <span class="title">Error 404</span>
    <h3>Page is not found</h3>
    <RouterLink to="/" class="link">Go back home</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.error-page > .title {
  color: rgb(143, 111, 219);
  font-size: 3rem;
}

h3 {
  color: #fff;
  font-size: 5rem;
}
.error-page .link {
  font-size: 1.5rem;
  color: rgb(143, 111, 219);
}
</style>
