<template>
    <div class="loading">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
    </div>
</template>

<script>
export default {
    name: 'loading'
}
</script>

<style scoped>
    @import "../assets/styles/_variables.css";
    @import "../assets/styles/_animations.css";
    
    .loading {
        max-height: 40px;
    }
    .square {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: var(--white);
        animation: grow 1.2s ease-in-out infinite;
    }
    .square:nth-child(2) {
        animation-delay: .1s;
    }
    .square:nth-child(3) {
        animation-delay: .2s;
    }

</style>