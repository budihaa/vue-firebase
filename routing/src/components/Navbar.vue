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
        <h2>Users Profile</h2>
        <ul>
            <li v-for="(username, i) in usersname" :key="i">
                <router-link :to="{ name: 'Profile', params: { username: username } }">
                    {{ username }} profile's
                </router-link>
            </li>
        </ul>
        <h2>Redirect</h2>
        <button @click="goBack">Go Back</button>
        <button @click="redirectHome">Redirect to Home</button>
        <button @click="goForward">Go Forward</button>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            usersname: ['budihaa', 'naattashaaa']
        }
    },
    methods: {
        redirectHome() {
            return this.$router.push({ name: 'Home' })
        },
        goBack() {
            return this.$router.go(-1)
        },
        goForward() {
            return this.$router.go(1)
        }
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
        margin: 10px;
        list-style-type: none;
    }

    li a {
        color: #42b983;
    }
</style>
