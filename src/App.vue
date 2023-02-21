<template>
  <div>
    <sidebar class="menu"></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './view/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
.menu{
  padding-bottom: 60px;
}
</style>
