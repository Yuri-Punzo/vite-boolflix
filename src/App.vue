<script>
/* import { store } from "./store.js"; */
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },
  /* data() {
    return {
      store
    }
  }, */
  mounted() {
    //store.callApi(store.api_url)
  }
}
</script>

<template>
  <h1 class="text-center">Hello Motherfucker</h1>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 200px;
}
</style>