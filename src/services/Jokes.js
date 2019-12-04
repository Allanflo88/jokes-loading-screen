export default {
    getJoke(){
        return fetch("https://official-joke-api.appspot.com/random_joke");
    }
}