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

### ref ou réactive vont définir le state du composant (équivalent de useState())

```
import { ref } from 'vue'
const message = ref('Hello World!') défini le state message

console.log(message.value) // "Hello World!"
message.value = 'Changed' change le state message équivalent de setState dans react
```

### Liaison d'attributs v-bind: abbrégée en :

`<div :id="dynamicId"></div> `
va permettre de lier le state dynamicId a la div (pour changement de classe par ex)

### v-on:click abbrége en @click

écouteur d'évenement (onClick en react)

### v-model fusion de v-bind et v-on

```
<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```

Permet de modifier le state text à travers l'input

### v-if

```
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

agit comme un if else directement en attribut de la balise

### v-for

```
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

fait une boucle for sur le tableau todos et rend le text de chaque todo ds la balise li
exemple todo list : https://vuejs.org/tutorial/#step-7

### computed() (a approfondir !!!)

permet de faire des actions en se servant d'une valeur extérieure ???

### Références du cycle de vie et des modèles

```
<script setup>
import { ref, onMounted } from 'vue'

const p = ref(null)

onMounted(() => {
  p.value.textContent = 'mounted!'
})
</script>

<template>
  <p ref="p">hello</p>
</template>
```
