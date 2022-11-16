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
        <div class="my_card">
            <div class="my_card_body">
                <h5>{{ film.title }}</h5>
                <p>{{ film.original_title }}</p>
                <p>{{ film.original_language }}</p>
                <p>{{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my_card {
    height: 300px;
    background-color: black;
    color: white;
}
</style>