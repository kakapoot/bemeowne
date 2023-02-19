<template>
    <main class="d-flex flex-column align-items-center justify-content-center container">
        <Searchbar />
        <div v-if="loading" class="spinner-border text-primary row" style="width: 5rem; height: 5rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="error" class="text-light fs-4">{{ error }}</div>
        <div v-if="cats" class="row row-cols-md-2 row-cols-lg-3 g-5">
            <Card v-for="cat in cats" :key="cat.id" :id="cat.id" :imgSrc="cat.url" :breed="cat.breeds[0].name"
                :country="cat.breeds[0].country_code" :description="cat.breeds[0].temperament" />
        </div>
    </main>
</template>
<script>
import Card from "../components/Card.vue";
import Searchbar from "../components/Searchbar.vue"
import FetchData from "../mixins/FetchData";

export default {
    name: "Search",
    components: { Card, Searchbar },
    data() {
        return {
            breeds: null,
            cats: null
        }
    },
    mixins: [FetchData],
    methods: {
        fetchSearchResult() {
            this.fetchData("https://api.thecatapi.com/v1/images/search?has_breeds=true&order=RAND&page=0&limit=6")
                .then((fetchedData) => {
                    this.cats = fetchedData
                })
        }
    },
    created() {
        this.fetchSearchResult()
    },
}
</script>
<style></style>