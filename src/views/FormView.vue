<script>
export default {
  data() {
    return {
      name: '',
      greeting: '',
    };
  },
  methods: {
    submitForm() {
      if (this.name) {
        this.greeting = `Hello, ${this.name}!`;
      } else {
        this.greeting = '';
      }
    },
  },
};
</script>


<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <label for="name">Enter your name:</label>
      <input type="text" id="name" v-model="name" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="greeting">{{ greeting }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
