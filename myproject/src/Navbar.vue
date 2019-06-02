<template>
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {}
    }
}
</script>

// Scoped means only this component get the style,
// even another component has element that same with this component
<style scoped>
    nav {
        text-align: center;
    }

    nav h2 {
        margin-top: 50px;
    }

    nav ul {
        padding: 0;
    }

    nav li {
        display: inline-block;
        list-style: none;
        margin: 10px;
    }
</style>
