<script>
import Heade from "./components/Heade.vue";
import CompteurVue from "./components/Compteur.vue";
import TestComponent from "./components/TestComponent.vue";
import { ref } from "vue";
import TechnosList from "./components/TechnosList.vue";
export default {
  name: "App",
  components: {
    // Heade,
    // CompteurVue,
    TestComponent,
    TechnosList,
  },
  setup() {
    const technos = ref([]);

    const saveTechno = function (data) {
      // on récupère le contenu du contexte pour mettre à jour data
      technos.value = [...technos.value, { techno: data, id: new Date() }];
      console.log(technos.value[0], technos.value);
    };
    const deleteTech = function (data) {
      console.log("techData", data);
      technos.value = [...technos.value.filter((el) => el.id !== data.id)];
    };
    const saveTech = function (data) {
      console.log("saveTech app", data);
    };
    return {
      saveTechno,
      technos,
      deleteTech,
      saveTech,
    };
  },
};
</script>

<template>
  <main>
    <!-- <Heade /> -->
    <!-- <CompteurVue /> -->
    <br />
    <!-- @add nous permet de récupérer la valeur compris dans l'enfant grâce au
    context -->
    <TestComponent @add="saveTechno" />
    <TechnosList :technos="technos" @delete="deleteTech" @save="saveTech" />
  </main>
</template>

<style></style>
