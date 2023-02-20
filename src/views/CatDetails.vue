<template>
    <main class="d-flex justify-content-center container">
        <div v-if="loading" class="spinner-border text-primary row" style="width: 5rem; height: 5rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="error" class="text-light fs-4">{{ error }}</div>
        <div v-if="!error && !loading && catDetails">
            <div class="row g-5">
                <div class="col-xl-5">
                    <div
                        class="p-5 bg-light rounded-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <img :src="catDetails.url" class="rounded-circle"
                            style="width: 400px; height:400px; object-fit:cover;" alt="">
                        <h1 class="mt-4 display-5 fw-bold">{{ catDetails.breedName }}</h1>
                        <p class="fs-3">{{ catDetails.country }}</p>
                        <Favourite />
                    </div>
                </div>
                <div class="col">
                    <div class="p-5 bg-light rounded-4 col d-flex flex-column justify-content-center">
                        <h1 class="fs-3 fw-semibold">{{ catDetails.temperament }}</h1>
                        <p class="fs-5">{{ catDetails.description }}</p>
                        <Statbar v-for="value, key in catDetails.stats" :name="key" :value="value" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import Statbar from '../components/Statbar.vue'
import Favourite from '../components/Favourite.vue'
import FetchData from '../mixins/FetchData'

export default {
    name: "CatDetails",
    components: { Statbar, Favourite },
    data() {
        return {
            id: this.$route.params.id,
            catDetails: null
        }
    },
    mixins: [FetchData],
    methods: {
        fetchCatDetails() {
            this.fetchData(`https://api.thecatapi.com/v1/images/${this.id}`)
                .then((fetchedData) => {
                    const breedInfo = fetchedData.breeds[0]
                    const catData = {
                        id: this.id,
                        url: fetchedData.url,
                        breedName: breedInfo.name,
                        country: breedInfo.origin,
                        temperament: breedInfo.temperament,
                        description: breedInfo.description,
                        stats: {
                            affectionLevel: breedInfo.affection_level,
                            energyLevel: breedInfo.energy_level,
                            grooming: breedInfo.grooming,
                            intelligence: breedInfo.intelligence,
                            healthIssues: breedInfo.health_issues,
                            socialNeeds: breedInfo.social_needs,
                            sheddingLevel: breedInfo.shedding_level,
                            vocalisation: breedInfo.vocalisation
                        }
                    }
                    this.catDetails = catData
                })
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchCatDetails()
            },
            { immediate: true }
        )
    },
}
</script>
<style ></style>