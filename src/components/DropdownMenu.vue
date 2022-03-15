<template>
  <div class="text-center">
    <v-menu top :offset-x="data.offset">
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" dark v-bind="props"> Filter </v-btn>
      </template>

      <v-list class="bg-dark">
        <v-list-item
          class="hover-me"
          v-for="(item, index) in data.items"
          :key="index"
          @click="store.dispatch('selectCategory', item.title)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, reactive } from "vue";
const store = useStore();
const props = defineProps({
  isOpen: Boolean,
});
const data = reactive({
  items: [
    { title: "Sedan" },
    { title: "Coupe" },
    { title: "SUV" },
    { title: "Hatchback" },
    { title: "Van/Minivan" },
    { title: "Convertible" },
  ],
  offset: true,
});
</script>
<style scoped>
.text-center:hover {
  cursor: pointer !important;
}
.bg-dark {
  display: flex;
  position: absolute;
  top: 1rem;
  right: -13rem;
  background-color: darkgray;
  border-radius: 7px;
  color: white;
}
.hover-me:hover {
  background-color: rgb(197, 206, 199) !important;
  cursor: pointer;
}
.hover-me > div:hover {
  font-weight: 700;
  color: rgb(59, 112, 61);
}
</style>
