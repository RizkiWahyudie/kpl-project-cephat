<template>
  <div>
    <!-- <img alt="Vue logo" class="mx-auto" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <nav-header></nav-header> -->
    <main-template></main-template>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTemplate from '@/components/MainTemplate.vue'
// import NavHeader from '@/components/NavHeader.vue'

export default {
  components: {
    MainTemplate
  }
}
</script>
