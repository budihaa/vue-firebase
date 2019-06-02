<template>
    <div>
        <h3>Online Friends</h3>

        <!--
            If you using <div> inside your root element,
            then you must add unique data in :key
        -->
        <div v-for="friend in friends" :key="friend.id">
            <span v-if="friend.online">{{ friend.name }}</span>
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
    }
}
</script>

<style scoped>

</style>

