import Vue from 'vue'
import App from './App.vue'

/**
 * @param mixed val: the initial data you pass
 * @param int limit: max string limit
 */
Vue.filter('wordLimiter', (val, limit) => {
    // Checking val
    if ( ! val || typeof(val) != 'string') return ''

    val = val.slice(0, limit) + '...';
    return val;
})

new Vue({
    el: '#app',
    render: h => h(App)
})
