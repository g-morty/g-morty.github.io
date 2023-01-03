<template>
  <div id="app">
    <router-view/>
    <Drawer/>
  </div>
</template>
<script>
import Drawer from "./components/drawer"
export default {
  components: {Drawer}
}
</script>