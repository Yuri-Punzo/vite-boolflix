<script>
export default {
    name: "LanguageFlag",
    props: {
        itemLanguage: String
    }
}
</script>

<template>
    <div v-if="itemLanguage === 'it'" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" src="../assets/img/icons8-italy-96.png" alt="">
    </div>
    <div v-else-if="itemLanguage === 'en'" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" src="../assets/img/icons8-great-britain-96.png" alt="">
    </div>
    <div v-else-if="itemLanguage === 'fr'" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" src="../assets/img/icons8-france-96.png" alt="">
    </div>
    <div v-else-if="itemLanguage === 'de'" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" src="../assets/img/icons8-germany-96.png" alt="">
    </div>
    <div v-else-if="itemLanguage === 'es'" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" src="../assets/img/icons8-spain-96.png" alt="">
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