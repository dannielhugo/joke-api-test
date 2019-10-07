<template>
  <div>
    <h1>{{ joke.setup }}</h1>
    <h2>{{ joke.punchline }}</h2>
  </div>
</template>

<script>
  import { getJoke } from "@/libs/api";
  export default {
    name: 'Jokes',
    mounted() {
      getJoke()
        .then(joke => {
          this.joke = joke;
        })
    },
    data() {
      return {
        joke: []
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>