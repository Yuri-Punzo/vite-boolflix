<script>
export default {
    name: "StarRatings",
    props: {
        itemRating: Number
    }
}
</script>

<template>
    <div v-if="Math.ceil(itemRating / 2) === 5" class="d-flex my_rating pt-1">
        <h5 class="pe-2">Voto:</h5>
        <img src="../assets/img/Mario64-Star.png" v-for="star in Math.ceil(itemRating / 2)">
    </div>
    <div v-else-if="Math.ceil(itemRating / 2) < 5 && Math.ceil(itemRating / 2) > 0" class="d-flex my_rating pt-1">
        <h5 class="pe-2">Voto:</h5>
        <img src="../assets/img/Mario64-Star.png" v-for="star in Math.ceil(itemRating / 2)">
        <img src="../assets/img/Mario64-Star-bNw.png" v-for="starBN in (5 - (Math.ceil(itemRating / 2)))">
    </div>
    <div v-else class="my_rating">
        <h5>Voto: </h5>
        <p class="fs-5">Unrated</p>
    </div>
</template>

<style lang="scss" scoped>
.my_rating {
    img {
        height: 25px;
    }

    h5 {
        display: inline;
    }

    p {
        display: inline;
        color: gray;
    }
}
</style>