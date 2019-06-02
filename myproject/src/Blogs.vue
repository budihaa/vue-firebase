<template>
    <div>
        <h2>{{ title }}</h2>
        <!-- <button @click="changeTitle">Change title</button> -->
        <div v-for="post in posts" :key="post.id">
            <h3 class="post-title">{{ post.title }}</h3>

            <!--
                Create FILTER to manipulate data,
                You can create your filter in main.js file!
                for example: wordLimiter(limit) for limiting word post body's
            -->
            <p class="post-body">{{ post.body | wordLimiter(120) }}</p>
            <hr>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "Blogs",
    data() {
        return {
            title: "Blogs",
            posts: []
        }
    },
    methods: {
        // changeTitle() {
        //     this.title = "This is the new title!"
        // }
    },
    // beforeCreate() {
    //     // When component init
    //     alert('Before update hook')
    // },
    created() {
        // Component finish rendered but data not passed yet
        // alert('Created hook')

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => this.posts = res.data)
            .catch(err => console.log(err))
    },
    // beforeUpdate() {
    //     // Before component data got update
    //     alert('Before Update Hook')
    // }
}
</script>

<style>
    .post-title {
        text-transform: capitalize;
    }
    .post-body {
        text-align: justify;
    }
</style>
