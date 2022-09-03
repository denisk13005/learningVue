<template>
  <ul>
    <li v-for="tech in technos" :key="tech.id">
      <span v-if="techToModify !== null && techToModify.id === tech.id">
        <input
          type="text"
          v-model="techToModify.techno"
          @keypress.enter="save"
        />
        <button @click="save(tech)">Save</button>
      </span>

      <span v-else
        >{{ tech.techno }} <button @click="remove(tech)">suppr</button>
        <button @click="openModifyTechno(tech)">Modif</button>
      </span>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
let techToModify = ref(null);
export default {
  props: {
    technos: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    const remove = function (tech) {
      console.log(tech);
      const test = props.technos.filter((el) => el.id !== tech.id);
      props.technos = test;
      ctx.emit("delete", tech);
    };
    const openModifyTechno = function (tech) {
      techToModify.value = tech;
    };
    const save = function (tech) {
      ctx.emit("save", tech);
      techToModify.value = null;
    };

    return {
      remove,
      openModifyTechno,
      techToModify,
      save,
    };
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
.modifyBtn {
  margin-left: 10px;
  cursor: pointer;
}
.visible {
  display: inline-block;
}
.hidden {
  display: none;
}
</style>
