import Vue from 'vue'
import Router from 'vue-router'
import { Home, About, Profile } from "@/components";

Vue.use(Router)

export default new Router({
    mode: 'history', // to removeing the HASH symbol in every routes
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/profile/:username',
            name: 'Profile',
            component: Profile
        },
    ]
})
