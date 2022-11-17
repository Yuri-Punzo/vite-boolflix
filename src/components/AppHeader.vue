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
            let allUrl
            let searchQuery = store.searchText
            allUrl = `${store.api_url}api_key=${store.api_key}&query=${searchQuery}`
            store.callApi(allUrl)
        }
    }
}
</script>

<template>
    <div id="site_header" class="d-flex justify-content-between aling-items-center">
        <div class="my_navbar">
            <img class="my-4" src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
            <span class="nav_links"><a href="">Home</a></span>
            <span class="nav_links"><a href="">Serie TV</a></span>
            <span class="nav_links"><a href="">Film</a></span>
            <span class="nav_links"><a href="">Nuovi e popolari</a></span>
            <span class="nav_links"><a href="">La mia lista</a></span>
            <span class="nav_links"><a href="">Sfoglia per lingua</a></span>
        </div>
        <div class="search_bar">
            <input placeholder="Search" v-model="store.searchText" @keyup.enter="searchFunction">
            <button class="ms-2 rounded" @click="searchFunction">Search</button>
        </div>

    </div>
    <!-- /#site_header -->
</template>

<style lang="scss" scoped>
#site_header {
    background-color: black;
    padding: 0 20px 0 20px;

    .my_navbar {
        img {
            height: 30px;
            padding-right: 24px;

        }

        span {
            padding-left: 16px;

            a {
                text-decoration: none;
                color: white;

                &:hover {
                    color: gray;
                }
            }
        }
    }


    .search_bar {
        margin-top: 24px;
    }
}
</style>