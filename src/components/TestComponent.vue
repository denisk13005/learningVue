<template lang="">
  <form @submit.prevent="addTechno">
    <label for="techno">Techno a ajouter</label>
    <br />
    <input type="text" name="techno" v-model="techToLearn" />
    <br />
    <button type="submit">Ajouter</button>
  </form>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props, ctx) {
    let techToLearn = ref("");
    const addTechno = function () {
      console.log("Form|addTechno()|techToLearn", techToLearn.value);
      ctx.emit("add", techToLearn.value); // fait remonter la valeur au parent
      techToLearn.value = "";
    };
    return {
      techToLearn,
      addTechno,
    };
  },
};
</script>
<style lang=""></style>
