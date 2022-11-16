<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue"

export default {
  name: "App",
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    store.callApi(store.api_url)
  }
}
</script>

<template>
  <h1 class="text-center">Hello Motherfucker</h1>
  <AppHeader />
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 200px;
}
</style>