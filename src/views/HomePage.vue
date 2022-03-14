<template>
  <div class="home-container">
    <div class="text">
      <h1>Welcome to topcars.net</h1>
      <h2>Find the most beautiful car of your dreams here</h2>
    </div>
    <RouterLink to="/cars/all">
      <button>Select your car</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
}
.text {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: rgb(235, 235, 221);
  font-family: "Times New Roman", Times, serif;
  font-size: 4rem;
  font-weight: 550;
}
h2 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: beige;
}

button {
  min-width: 15rem;
  min-height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(100 85 85) !important;
  border-radius: 15px;
  border: 2px solid white;
  background: rgb(231, 231, 233);
}

button:hover {
  background-color: rgb(83, 79, 79);
  cursor: pointer;
  color: #fff !important;
}
a {
  text-decoration: none;
}
a > button {
  font-size: 2rem;
  color: rgb(223, 215, 215);
}
</style>
