<script>
import { store } from "../store.js";
export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    methods: {
        searchFunction() {
            let url
            let searchQuery = store.searchText
            url = `${store.api_url}${searchQuery}`
            store.callApi(url)
        }
    }
}
</script>

<template>
    <div id="site_header" class="text-center">
        <h1 class="text-center my-3">Hello Motherfucker</h1>
        <input placeholder="Search" v-model="store.searchText" @keyup.enter="searchFunction">
        <button class="ms-2 rounded" @click="searchFunction">Search</button>
    </div>
    <!-- /#site_header -->
</template>

<style lang="scss" scoped>

</style>