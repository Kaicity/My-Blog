<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue App</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view></router-view>
  </div>
  </body>
  </html>

</template>

<script>

import NavigationBar from "@/components/Navigation.vue";

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data() {

  },
}

</script>

<style>
#app {
  font-family: 'Manrope', 'Segoe UI', sans-serif;
}
</style>
