<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <Navbar />
        <Blogs />

        <!-- Passing data with props -->
        <!-- <AllFriends :friends="friends" @unfriend="unfriend" /> -->
        <!-- <OnlineFriends :friends="friends" /> -->

    </div>
</template>

<script>
import Navbar from './Navbar'
import Blogs from './Blogs'
// import AllFriends from './AllFriends';
// import OnlineFriends from './OnlineFriends';

export default {
    name: 'app',
    components: {
        Navbar,
        // AllFriends, OnlineFriends
        Blogs
    },
    data() {
        return {
            msg: 'Hello, this is my first Vue Project! Woohoo :)',

            // Data for <AllFriends /> and <OnlineFriends />
            friends: [
                { id: 1, name: 'Joe', online: true },
                { id: 2, name: 'Fi', online: false },
                { id: 3, name: 'Martin', online: true },
                { id: 4, name: 'James', online: false }
            ]
        }
    },
    methods: {
        // unfriend(payload) {
        //     if (confirm('Are you sure?')) {
        //         let name;

        //         // Re-assign object values yang tidak sama dengan payload.id
        //         this.friends = this.friends.filter( friend => {
        //             return friend.id !== payload.id
        //         })
        //     }
        // }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 30px;
}

h1 {
    text-align: center;
    font-weight: normal;
}
</style>
