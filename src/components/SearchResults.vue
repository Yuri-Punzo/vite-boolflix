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
    <div v-if="store.results.length === 0">
        <h1 class="text-center">OPS</h1>
    </div>
    <div v-else class="my_col position-relative" v-for="item in store.results">
        <div class=" my_card">
            <div class="my_card_body">
                <div class="title">
                    <h5>Titolo: </h5>
                    <p class="fs-5">{{ item.title }} {{ item.name }}</p>
                </div>
                <div class="original_title pt-2"
                    v-show="(item.title || item.name) !== (item.original_title || item.original_name)">
                    <h5>Titolo originale: </h5>
                    <p class="fs-5">{{ item.original_title }} {{ item.original_name }}</p>
                </div>

                <LanguageFlag :itemLanguage="item.original_language" />

                <StarRatings :itemRating="item.vote_average" />

                <div class="overview pt-2">
                    <h5>Overview: </h5>
                    <p class="fs-5">{{ item.overview }}</p>
                </div>
            </div>
        </div>
        <div class="poster" v-if="item.poster_path === null">
            <p class="fs-5 pt-5 text-center">{{ item.title }} {{ item.name }}</p>
        </div>
        <div class="poster" v-else>
            <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my_col {
    padding: 0 12px 0 12px;

    &:hover .poster {
        display: none;
    }
}

.my_card {
    height: 513px;
    width: 342px;
    background-color: black;
    color: white;
    margin-bottom: 2rem;

    .my_card_body {
        height: 100%;
        padding: 1.5rem;
        overflow-y: auto;

        h5 {
            display: inline;
        }

        p {
            display: inline;
            color: gray;
        }
    }
}

.poster {
    position: absolute;
    top: 0;
    left: 12px;
    height: 513px;
    width: 342px;
    background-color: black;
    color: white;
}

.overview {
    p {
        line-height: 20px;
    }
}
</style>