<template>
  <div id="app">
    <loading></loading>
    <joke></joke>
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import Joke from './components/Joke.vue'

export default {
  name: 'app',
  components: {
    Loading,
    Joke
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    background-color: #2867B2;
    color: white;
  }
</style>
