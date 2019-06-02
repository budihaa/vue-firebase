<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <Navbar />
    </div>
</template>

<script>
import Navbar from './Navbar'

export default {
    name: 'app',
    components: {
        Navbar
    },
    data() {
        return {
            msg: 'Hello, this is my first Vue Project! Woohoo :)',
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
}

h1 {
    font-weight: normal;
}
</style>
