<template>
  <p>Compteur : {{ count }}</p>

  <button @click="getUsers">Get Users</button>
</template>
méthode
<script>
import fetchDatas from "../api/fetchUsers";
//api option
// export default {

//   data() {
//     return {
//       count:0
//     }
//   },
//   methods: {
//     increment(){
//        this.count ++
//     }
//   },
// }

//api composition
import { ref } from "vue";
export default {
  setup(props) {
    const count = ref(2);
    const users = ref([]);
    const url = ref("https://jsonplaceholder.typicode.com/users");
    const increment = () => {
      count.value++;
    };
    const getUsers = async () => {
      users.value = fetchDatas(url.value);
    };

    return {
      count,
      increment,
      getUsers,
    };
  },
};
</script>
