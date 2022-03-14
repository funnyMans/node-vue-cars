<template>
  <div class="list">
    <section class="header-container">
      <h1 class="list-title">
        {{ title }} {{ title === "ALL" ? "MODELS" : "" }}
      </h1>
      <div class="controllers">
        <DropdownMenu />
        <div class="search">
          <input type="text" v-model="filterText" placeholder="Search..." />
        </div>
      </div>
    </section>
    <div class="categories">
      <span
        v-for="(item, idx) in categories"
        :key="idx"
        @click="store.dispatch('deleteCategories', idx)"
        >{{ item }}</span
      >
    </div>
    <v-btn v-if="categories.length" variant="outlined" color="error"
      >Clear</v-btn
    >
    <section class="cars-list">
      <SingleCar
        v-for="car in filteredCars"
        :key="filteredCars.Model"
        :details="car"
      />
    </section>
    <span v-if="!filteredCars.length" class="no-match-text"
      >No match found</span
    >
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SingleCar from "./SingleCar.vue";
import DropdownMenu from "./DropdownMenu.vue";

const filterText = ref("");

const {
  params: { brand },
} = useRoute();
const store = useStore();
const title = brand.toUpperCase();
const cars = computed(() => store.getters.getActiveCars(brand));
const categories = computed(() => store.getters.getCategories);
const filteredCars = computed(() => {
  return cars.value.filter((car) => {
    if (categories.value.length) {
      return (
        categories.value.includes(car.Category) &&
        car.Model.toLowerCase()
          .replaceAll(/[\W_]+/g, "")
          .includes(filterText.value)
      );
    } else {
      return car.Model.toLowerCase()
        .replaceAll(/[\W_]+/g, "")
        .includes(filterText.value);
    }
  });
});
</script>

<style scoped>
.list {
  margin: 7rem auto 3rem auto;
  width: 100%;
}
.header-container {
  width: 84%;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.controllers {
  display: flex;
  column-gap: 2rem;
}
.list-title {
  font-family: "Times New Roman", Times, serif;
  font-size: 3rem;
  text-align: center;
  color: bisque;
  transition: 1s;
}
.list-title:hover {
  transform: scale(0.92);
  cursor: pointer;
}
.search > input {
  max-width: 10rem;
  height: 2rem;
  border-radius: 3px;
  margin-left: 3px;
}
.search > input:focus {
  outline: none;
  border: 3px solid gray;
  background-color: rgb(88, 84, 84);
  color: antiquewhite;
  font-size: 0.9rem;
}
.search > button:hover {
  background-color: rgb(88, 84, 84);
  color: antiquewhite;
}
.categories {
  margin-left: 2rem;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 1rem;
}
.categories > span {
  padding: 5px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.25rem;
  color: white;
  border-radius: 5px;
}

.categories > span:hover {
  cursor: pointer;
  background-color: lightgreen;
}
.cars-list {
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.no-match-text {
  display: block;
  text-align: center;
  color: rgb(252, 155, 64);
  font-size: 3rem;
  margin-top: 15rem;
}
.v-btn {
  margin: 1.5rem 0 0 3rem;
}
</style>
