<template>
    <main class="d-flex flex-column align-items-center justify-content-center container mb-4">
        <button type="button" @click="fetchSearchResult()" class="btn btn-lg btn-primary mb-4 text-light">Find More
            Pawtential
            Partners</button>
        <Searchbar @select-breed="selectBreed" v-if="breeds" :breeds="breeds" />

        <div v-if="loading" class="spinner-border text-primary row" style="width: 5rem; height: 5rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="error" class="text-light fs-4">{{ error }}</div>
        <div v-if="canDisplayContent(cats) && cats.length === 0" class="text-light fs-4">No cats found :(</div>

        <div v-if="canDisplayContent(cats)" class="row row-cols-md-2 row-cols-lg-3 g-5">
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
            cats: null,
            selectedBreedId: "all"
        }
    },
    mixins: [FetchData],
    methods: {
        fetchBreeds() {
            this.fetchData("https://api.thecatapi.com/v1/breeds")
                .then((fetchedData) => {
                    this.breeds = fetchedData
                })
        },

        fetchSearchResult() {
            let url = "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=6"
            if (this.selectedBreedId !== "all") {
                url = `https://api.thecatapi.com/v1/images/search?breed_ids=${this.selectedBreedId}&limit=6`
            }

            this.fetchData(url)
                .then((fetchedData) => {
                    this.cats = fetchedData
                })

        },

        selectBreed(id) {
            this.selectedBreedId = id
        }
    },
    created() {
        this.fetchBreeds()
        this.fetchSearchResult()
    },
    watch: {
        selectedBreedId: function () {
            this.fetchSearchResult()
        }
    }
}
</script>
<style></style>