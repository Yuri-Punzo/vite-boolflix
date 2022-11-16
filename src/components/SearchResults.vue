<script>
import { store } from "../store"

export default {
    name: "SearchResults",
    props: {
        film: Object
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="col" v-for="film in store.results">
        <h4>{{ film.title }}</h4>
        <h5>{{ film.original_title }}</h5>
        <p>{{ film.original_language }}</p>
        <p>{{ film.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>