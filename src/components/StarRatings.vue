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
        <h5>Voto:</h5>
        <div class="d-flex ps-2">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
        </div>
    </div>
    <div v-else-if="Math.ceil(itemRating / 2) === 4" class="d-flex my_rating pt-1">
        <h5>Voto:</h5>
        <div class="d-flex ps-2">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
        </div>
    </div>
    <div v-else-if="Math.ceil(itemRating / 2) === 3" class="d-flex my_rating pt-1">
        <h5>Voto:</h5>
        <div class="d-flex ps-2">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
        </div>
    </div>
    <div v-else-if="Math.ceil(itemRating / 2) === 2" class="d-flex my_rating pt-1">
        <h5>Voto:</h5>
        <div class="d-flex ps-2">
            <img src="../assets/img/Mario64-Star.png" alt="">
            <img src="../assets/img/Mario64-Star.png" alt="">
        </div>
    </div>
    <div v-else-if="Math.ceil(itemRating / 2) === 1" class="d-flex my_rating pt-1">
        <h5>Voto:</h5>
        <div class="d-flex ps-2">
            <img src="../assets/img/Mario64-Star.png" alt="">
        </div>
    </div>
    <div v-else class="my_rating pt-2">
        <h5>Voto: </h5>
        <p class="fs-5">Unrated</p>
    </div>
</template>

<style lang="scss" scoped>
.my_rating {
    img {
        height: 25px;
    }

    h5,
    p {
        display: inline;
    }
}
</style>