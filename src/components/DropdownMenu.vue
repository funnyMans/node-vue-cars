<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="secondary" dark> Filter </v-btn>
      </template>

      <v-list class="bg-dark">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="hover-me"
          textColor="rgb(255,255,255)"
          @click="store.dispatch('selectCategory', item.title)"
        >
          <span>{{ item.title }}</span>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { data } from "../mock/index";

const store = useStore();
</script>

<style scoped>
.text-center:hover {
  cursor: pointer !important;
}
.bg-dark {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 1rem;
  left: 0;
  background-color: darkgray;
  border-radius: 7px;
  color: white;
}
.hover-me {
  padding: 10px;
  min-width: 8rem;
  font-size: 1.1rem;
}
.hover-me:active {
  color: green;
  font-size: 1.3rem;
}
.hover-me:hover {
  background-color: rgb(197, 206, 199) !important;
  cursor: pointer;
  background-color: lightgreen;
}
.v-list-item-title > span {
  display: none !important;
}
</style>
