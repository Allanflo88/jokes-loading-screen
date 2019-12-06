<template>
    <div class="container" v-if="jokeBeingShowed">
        <p class="joke" v-if="!showPunchline">{{jokeBeingShowed.setup || ""}}</p>
        <p class="joke" v-if="showPunchline">{{jokeBeingShowed.punchline || ""}}</p>
    </div>

</template>

<script>
import Jokes from '../services/Jokes.js'

export default {
    name: 'joke',
    data() {
        return {
            jokes: [],
            jokeBeingShowed: null,
            showPunchline: false
        }
    },
    mounted() {
        this.getJokes();
        setInterval(this.showJoke, 5000);
    },
    methods: {
        getJokes() {
            Jokes.getTenJokes().then(response => {
                response.json().then(json => {
                    this.jokes = this.jokes.length ? [...this.jokes,...json] : json;
                });
            });
        },
        showJoke() {
            if(this.jokes.length){
                this.showPunchline = false;
                this.jokeBeingShowed = this.jokes.pop();
                setTimeout(()=> {
                    this.showPunchline = true;
                }, 2500);
            }
            if(this.jokes.length <= 1){
                this.getJokes();
            }
        }
    }
}
</script>

<style>
    .joke {
        min-height: 20px;
        width: 100%;
    }
</style>