<template>
  <div>
    <h1 class="list-title">
      {{ title }} {{ title === "ALL" ? "MODELS" : "" }}
    </h1>
    <section class="cars-list">
      <SingleCar v-for="car in cars" :key="car.Model" :details="car" />
    </section>
  </div>
</template>

<script setup>
import SingleCar from "./SingleCar.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const {
  params: { brand },
} = useRoute();
const store = useStore();
const title = brand.toUpperCase();
const cars = store.getters.getActiveCars(brand);
</script>

<style scoped>
.list-title {
  margin-top: 6rem;
  font-size: 3rem;
  text-align: center;
  color: bisque;
}
.cars-list {
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
