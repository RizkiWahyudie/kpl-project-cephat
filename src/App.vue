<template>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view name="nav"></router-view> -->
    <router-view name="nav"></router-view>
    <router-view/>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('autoLogin');
    },
}
</script>