<script>
import { store } from "../store"
import LanguageFlag from "./LanguageFlag.vue";
import StarRatings from "./StarRatings.vue"

export default {
    name: "SearchResults",
    components: {
        LanguageFlag,
        StarRatings
    },
    props: {
        item: Object
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="col" v-for="item in store.results">
        <div class=" my_card">
            <div class="my_card_body pt-5">
                <div class="title">
                    <h5>Titolo: </h5>
                    <p class="fs-5">{{ item.title }} {{ item.name }}</p>
                </div>
                <div class="original_title pt-2">
                    <h5>Titolo originale: </h5>
                    <p class="fs-5">{{ item.original_title }} {{ item.original_name }}</p>
                </div>

                <LanguageFlag :itemLanguage="item.original_language" />

                <StarRatings :itemRating="item.vote_average" />

                <div class="original_title pt-2">
                    <h5>Overview: </h5>
                    <p class="fs-5">{{ item.overview }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my_card {
    height: 550px;
    background-color: black;
    color: white;
    margin-bottom: 2rem;
    overflow: hidden;

    .my_card_body {
        padding: 1.5rem;

        h5,
        p {
            display: inline;
        }
    }
}
</style>