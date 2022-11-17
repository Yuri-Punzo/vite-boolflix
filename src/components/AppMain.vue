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
    <div id="site_main" class="pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3">
                <SearchResults />
            </div>
        </div>
    </div>
    <!-- /#site_main -->
</template>

<style lang="scss" scoped>

</style>