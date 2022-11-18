<script>
import { store } from "../store"

export default {
    name: "LanguageFlag",
    props: {
        itemLanguage: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="store.langList.includes(itemLanguage)" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" :src="`../assets/img/${itemLanguage}.png`" alt="">
    </div>
    <div v-else class="pt-2">
        <h5>Lingua: </h5>
        <p class="fs-5">{{ itemLanguage.toUpperCase() }}</p>
    </div>
</template>

<style lang="scss" scoped>
.my_flag {
    height: 25px;
    padding-left: 4px;
}

p,
h5 {
    display: inline;
}
</style>