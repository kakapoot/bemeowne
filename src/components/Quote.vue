<template>
    <div class="mt-5 p-5 bg-light rounded-4 d-flex justify-content-center">
        <div v-if="loading" class="spinner-border text-primary row" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="d-flex">
            <div class="col d-flex flex-column justify-content-center align-items-center text-center p-5">
                <h1 class="display-6 fw-bold">"{{ generateRandomQuote }}"</h1>
                <p class="fs-4">⁠— {{ breedName }}, {{ generateRandomDistance }} m away from you!</p>
            </div>
            <div class="col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <img :src="imgSrc" class="rounded-circle" style="width: 300px; height:300px; object-fit:cover" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import quotes from "../assets/quotes.json"

export default {
    name: "Quote",
    data() {
        return {
            loading: false,
            error: null,
            quote: "",
            imgSrc: "",
            breedName: "",
            quotes: quotes.quotes
        }
    },
    methods: {
        async fetchRandomCat() {
            this.loading = true
            try {
                const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=true", {
                    method: "GET",
                    headers: {
                        "x-api-key": import.meta.env.VITE_THECATAPI_KEY
                    }
                })
                const data = await response.json()
                this.imgSrc = data[0].url
                this.breedName = data[0].breeds[0].name
            } catch (error) {
                this.error = error.toString()
            } finally {
                this.loading = false
            }
        }
    },
    mounted() {
        this.fetchRandomCat()
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