<template>
    <div class="mt-5 p-5 bg-light rounded-4 row d-flex justify-content-center">
        <div v-if="loading" class="spinner-border text-primary row" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="error" class="fs-4">{{ error }}</div>

        <div v-if="quoteData" class="col d-flex flex-column justify-content-center align-items-center p-5 text-center">
            <div class="col d-flex flex-column justify-content-center align-items-center text-center">
                <h1 class="display-6 fw-bold">"{{ generateRandomQuote }}"</h1>
                <p class="fs-4">⁠— {{ quoteData[0].breeds[0].name }} , {{ generateRandomDistance }} m away from you!</p>
            </div>
        </div>

        <div v-if="quoteData" class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img :src="quoteData[0].url" class="rounded-circle" style="width: 300px; height:300px; object-fit:cover" alt="">
        </div>
    </div>
</template>
<script>
import quotes from "../assets/quotes.json"
import FetchData from "../mixins/FetchData"

export default {
    name: "Quote",
    data() {
        return {
            quoteData: null,
            breedName: "",
            quotes: quotes.quotes
        }
    },
    mixins: [FetchData],
    created() {
        this.fetchData("https://api.thecatapi.com/v1/images/search?has_breeds=true")
            .then((fetchedData) => {
                this.quoteData = fetchedData
            })
    },
    computed: {
        generateRandomQuote() {
            return this.quotes[Math.floor(Math.random() * this.quotes.length)]
        },
        generateRandomDistance() {
            return Math.floor(Math.random() * 1000)
        }
    }
}
</script>
<style></style>