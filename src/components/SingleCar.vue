<template>
  <v-card contained-text rounded class="single-car">
    <v-card-title>
      {{ details.Model }}
    </v-card-title>

    <div v-if="!showDetails" class="img-container">
      <img :src="'/car-concept.jpg'" class="img-size" />
    </div>
    <div v-else class="content">
      <div>
        <h3>{{ details.Category }}</h3>
        <h4>{{ details.Year }}</h4>
        <p>{{ details.createdAt }}</p>
      </div>
    </div>

    <v-card-actions>
      <button @click="showDetails = !showDetails" class="show-details">
        <span>{{ !showDetails ? "Show" : "Hide" }} details</span>
      </button>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  details: Object,
});
const showDetails = ref(false);
</script>

<style scoped>
.single-car {
  width: 17%;
  min-width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 10px 8px 10px 0;
  justify-content: space-between;
}
.content {
  height: 245px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.img-size {
  width: 100%;
}
.show-details {
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}
.show-details:hover {
  background-color: rgb(58, 53, 53);
  color: white;
  cursor: pointer;
}
.single-car > h2 {
  color: rgb(241, 227, 21);
}
.single-car > h3 {
  color: rgb(21, 234, 241);
}
.single-car > p {
  font-size: small;
}
</style>
