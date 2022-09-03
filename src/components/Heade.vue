<script setup>
import { ref } from "vue";
const dynamic = ref("themeGreen");
function handleChange() {
  dynamic.value === "themeGreen"
    ? (dynamic.value = "themeRed")
    : (dynamic.value = "themeGreen");
}
</script>

<template>
  <div>
    <h1 :class="dynamic">Header</h1>
    <button @click="handleChange">click</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 64px;
}
.themeGreen {
  color: green;
}
.themeRed {
  color: red;
}
</style>
