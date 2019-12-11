<template>
    <div class="container">
        <transition appear name="fade" mode="out-in" v-if="jokeBeingShowed">
            <p class="joke" v-if="!showPunchline" key="setup">{{jokeBeingShowed.setup || ""}}</p>
            <p class="joke" v-else key="punchline">{{jokeBeingShowed.punchline || ""}}</p>
        </transition>
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

<style scoped>
    .container {
        min-height: 50px;
    }
    .joke {
        width: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>