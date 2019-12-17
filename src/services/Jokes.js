export default {
    getTenJokes(){
        return fetch("https://official-joke-api.appspot.com/random_ten");
    }
}