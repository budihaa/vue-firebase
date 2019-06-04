<template>
    <div>
        <h1>Profile for {{ username }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            username: this.$route.params.username
        }
    },
    methods: {
        updateUsername() {
            this.username = this.$route.params.username
        }
    },
    watch: { // Watch changes of object in this component and triggering methods
        $route: 'updateUsername'// When route change trigger updateUsername() methods
    }
}
</script>

<style>
</style>
