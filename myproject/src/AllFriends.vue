<template>
    <div>
        <h3>All Friends</h3>

        <!--
            If you using <div> inside your root element,
            then you must add unique data in :key
        -->
        <div v-for="friend in friends" :key="friend.id">
            <span>{{ friend.name }}</span> <button @click="unfriend(friend.id)">x</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AllFriends',

    // Get the passed props data
    props: [
        "friends"
    ],
    data () {
        return {}
    },
    methods: {

        // Create custome props in root component element
        unfriend(id) {
            this.$emit('unfriend', { id })
        }

    }
}
</script>

<style scoped>
    span {
        margin-right: 5px;
    }
    button {
        background: red;
        color: white;
    }
</style>

