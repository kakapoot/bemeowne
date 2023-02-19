<template>
    <main class="container">
        <div class="p-5 bg-light rounded-4 row">
            <div class="col-lg-4 d-flex flex-column justify-content-center">
                <img src="../assets/img.png" class="img-fluid rounded" alt="">
            </div>
            <div class="col d-flex flex-column justify-content-center align-items-start p-5">
                <h1 class="display-5 fw-bold">Cute single cats in your area!</h1>
                <p class="fs-4">Tired of chasing mice and kneading biscuits all by your lonesome? Look no further as
                    BeMeowne opens you to a new world of possibilities. You deserve to find the one who can match your
                    felines. Meet them today!
                </p>
                <router-link to="/search"><button class="btn btn-primary btn-lg text-light" type="button">Find the purrfect
                        partner</button></router-link>
            </div>
        </div>

        <Quote class="row" />
    </main>
</template>
<script>
import Quote from "../components/Quote.vue";
export default {
    name: "Home",
    components: { Quote }
}
</script>
<style></style>