<template>
  <div class="home-container">
    <button>
      <RouterLink to="/cars/all">Select your car</RouterLink>
    </button>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  min-width: 10rem;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 5px;
  background-color: gray;
}
button:hover {
  background-color: rgb(54, 51, 51);
  cursor: pointer;
}
button > a {
  font-size: 2rem;
  color: rgb(223, 215, 215);
  text-decoration: none;
}
</style>
