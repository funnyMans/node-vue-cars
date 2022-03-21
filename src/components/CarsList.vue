<template>
  <div class="list">
    <section class="header-container">
      <h1 class="list-title">
        {{ brand }} {{ brand === "all" ? "models" : "" }}
      </h1>
      <div class="controllers">
        <div class="search">
          <input v-model="searchValue" type="text" placeholder="Search..." />
        </div>
      </div>
    </section>

    <div class="categories">
      <div class="filter-container">
        <DropdownMenu />
      </div>
      <div
        v-for="(item, idx) in categories"
        :key="idx"
        @click="store.dispatch('deleteCategories', idx)"
      >
        {{ item }}
      </div>
      <button v-if="categories.length" class="clear-all" @click="resetFilters">
        Clear All
      </button>
    </div>

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
import { ref, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SingleCar from "./SingleCar.vue";
import DropdownMenu from "./DropdownMenu.vue";

const store = useStore();
const searchValue = ref("");
const {
  params: { brand },
} = useRoute();
const cars = computed(() => store.getters.getActiveCars);
const categories = computed(() => store.getters.getCategories);

const filteredCars = computed(() => {
  return (
    cars.value &&
    cars.value.filter((car) => {
      const searchText =
        searchValue.value && searchValue.value.replaceAll(/[\W_]+/g, "");
      const isFilterBySearch = searchText
        ? car.Model.toLowerCase()
            .replaceAll(/[\W_]+/g, "")
            .includes(searchText)
        : true;
      if (categories.value.length) {
        return categories.value.includes(car.Category) && isFilterBySearch;
      }
      return isFilterBySearch;
    })
  );
});

const resetFilters = () => store.dispatch("deleteAllCategories");

onBeforeMount(() => {
  store.dispatch("setActiveCars", brand);
});
</script>

<style scoped>
.list {
  margin: 7rem auto 3rem auto;
  width: 100%;
}
.header-container {
  width: 84%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.controllers {
  display: flex;
  column-gap: 2rem;
  flex-direction: column;
  align-items: flex-end;
}

.filter-container {
  height: 100%;
  margin-top: 15px;
}
.list-title {
  font-family: "Times New Roman", Times, serif;
  font-size: 3rem;
  text-align: center;
  color: bisque;
  transition: 1s;
  text-transform: uppercase;
}
.list-title:hover {
  transform: scale(0.92);
  cursor: pointer;
}
.search > input {
  min-width: 15rem;

  height: 3rem;
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
  min-height: 2.5rem;
  margin-left: 5rem;
  display: flex;
  justify-content: flex-start;

  align-items: flex-end;
  flex-wrap: wrap;
  column-gap: 1rem;
}
.categories > div {
  padding: 5px 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  color: white;
  border-radius: 5px;
}
.categories > div:hover {
  cursor: pointer;
  background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);
  background: linear-gradient(to right, #cbcaa5, #334d50);
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

.clear-all {
  height: 2.5rem;
  color: rgb(223, 211, 211);
  font-size: 1rem;
  font-weight: 550;
  border-radius: 10px;

  background: rgb(253, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  transition: 0.3s;
}

.clear-all:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
