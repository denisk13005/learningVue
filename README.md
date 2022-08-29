# Learn VueJs

`npm init vue@lastest` installe le template vue avec la dernière version
`npm install` installe les dépendances
`npm run dev` lance le projet dans le navigateur

l'api option => classe

```
<script>
export default {
// Properties returned from data() become reactive state
// and will be exposed on `this`.
data() {
  return {
    count: 0
  }
},

// Methods are functions that mutate state and trigger updates.
// They can be bound as event listeners in templates.
methods: {
  increment() {
    this.count++
  }
},

// Lifecycle hooks are called at different stages
// of a component's lifecycle.
// This function will be called when the component is mounted.
mounted() {
  console.log(`The initial count is ${this.count}.`)
}
}
</script>

<template>
<button @click="increment">Count is: {{ count }}</button>
</template>
```

l'api composition => fonctions

```
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

```
