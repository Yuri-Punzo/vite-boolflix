<script>
import SearchResults from "./searchResults.vue"

export default {
    name: "AppMain",
    components: {
        SearchResults
    }
}
</script>

<template>
    <div id="site_main">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-5">
                <SearchResults />
            </div>
        </div>
    </div>
    <!-- /#site_main -->
</template>

<style lang="scss" scoped>

</style>