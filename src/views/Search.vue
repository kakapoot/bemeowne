<template>
    <main class="d-flex justify-content-center container">
        <div v-if="loading" class="spinner-border text-primary row" style="width: 5rem; height: 5rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <ul v-else class="p-5 row row-cols-md-2 row-cols-lg-3 g-5">
            <Card v-for="cat in cats" :imgSrc="cat.url" :breed="cat.breeds[0].name" :country="cat.breeds[0].country_code"
                :description="cat.breeds[0].temperament" />
        </ul>
    </main>
</template>
<script>
import Card from "../components/Card.vue";
export default {
    name: "Search",
    components: { Card },
    data() {
        return {
            loading: false,
            error: null,
            cats: null
        }
    },
    methods: {
        async fetchData() {
            this.loading = true
            try {
                const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=true&order=RAND&page=0&limit=6", {
                    method: "GET",
                    headers: {
                        "x-api-key": import.meta.env.VITE_THECATAPI_KEY
                    }
                })
                const data = await response.json()
                this.cats = data
                console.log(this.cats)
            } catch (error) {
                this.error = error.toString()
            } finally {
                this.loading = false
            }
        }
    },
    mounted() {
        this.fetchData()
    },
}
</script>
<style></style>