<template>
    <div class="mt-5 p-5 bg-light rounded-4 row d-flex justify-content-center">
        <div v-if="loading" class="spinner-border text-primary row" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="error" class="fs-4">{{ error }}</div>

        <div v-if="canDisplayContent(cat)"
            class="col d-flex flex-column justify-content-center align-items-center p-5 text-center">
            <div class="col d-flex flex-column justify-content-center align-items-center text-center">
                <h1 class="display-6 fw-bold">"{{ generateRandomQuote }}"</h1>
                <p class="fs-4">⁠— {{ cat.breedName }}, {{ generateRandomDistance }} m away from you!</p>
            </div>
        </div>

        <div v-if="canDisplayContent(cat)" class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img :src="cat.imgSrc" class="rounded-circle" style="width: 300px; height:300px; object-fit:cover" alt="">
        </div>
    </div>
</template>
<script>
import quotesData from "../assets/quotes.json"
import FetchData from "../mixins/FetchData"

export default {
    name: "Quote",
    data() {
        return {
            quotes: quotesData.quotes,
            cat: null
        }
    },
    mixins: [FetchData],
    created() {
        this.fetchRandomCat()
    },
    methods: {
        fetchRandomCat() {
            this.fetchData("https://api.thecatapi.com/v1/images/search?has_breeds=true")
                .then((fetchedData) => {
                    const catData = {
                        breedName: fetchedData[0].breeds[0].name,
                        imgSrc: fetchedData[0].url
                    }
                    this.cat = catData
                })
        },
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