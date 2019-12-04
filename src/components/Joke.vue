<template>
    <div class="container">
        <p class="container__joke" v-bind:class="{active: joke}">{{joke.setup || ""}}</p>
        <p class="container__joke" v-bind:class="{active: joke}">{{joke.punchline || ""}}</p>
    </div>

</template>

<script>
import Jokes from '../services/Jokes.js'

export default {
    name: 'joke',
    data() {
        return {
            joke: null
        }
    },
    mounted() {
        Jokes.getJoke().then(response => {
            response.json().then(json => {
                this.joke = json;
            });
        });
    },
    methods: {
    }
}
</script>

<style>
    .container__joke {
        min-height: 20px;
        width: 100%;
    }
</style>