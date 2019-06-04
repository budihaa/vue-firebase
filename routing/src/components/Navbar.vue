<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'About' }">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {}
    }
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    li {
        display: inline-block;
        margin-right: 10px;
        list-style-type: none;
    }

    li a {
        color: #42b983;
    }
</style>
