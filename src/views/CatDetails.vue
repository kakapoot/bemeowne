<template >
    <main class="d-flex justify-content-center container">
        <div v-if="loading" class="spinner-border text-primary row" style="width: 5rem; height: 5rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="error" class="text-light fs-4">{{ error }}</div>
        <div v-if="catData">
            <div class="row g-5">
                <div class="col-xl-5">
                    <div
                        class="p-5 bg-light rounded-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <img :src="catData.url" class="rounded-circle" style="width: 400px; height:400px; object-fit:cover;"
                            alt="">
                        <h1 class="mt-4 display-5 fw-bold">{{ catData.breeds[0].name }}</h1>
                        <p class="fs-3">{{ catData.breeds[0].origin }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    </div>
                </div>
                <div class="col">
                    <div class="p-5 bg-light rounded-4 col d-flex flex-column justify-content-center">
                        <h1 class="fs-3 fw-semibold">{{ catData.breeds[0].temperament }}</h1>
                        <p class="fs-5">{{ catData.breeds[0].description }}</p>
                        <Statbar statName="Affection Level" :stat="catData.breeds[0].affection_level" />
                        <Statbar statName="Energy Level" :stat="catData.breeds[0].energy_level" />
                        <Statbar statName="Grooming" :stat="catData.breeds[0].grooming" />
                        <Statbar statName="Intelligence" :stat="catData.breeds[0].intelligence" />
                        <Statbar statName="Health Issues" :stat="catData.breeds[0].health_issues" />
                        <Statbar statName="Social Needs" :stat="catData.breeds[0].social_needs" />
                        <Statbar statName="Shedding Level" :stat="catData.breeds[0].shedding_level" />
                        <Statbar statName="Vocalisation" :stat="catData.breeds[0].vocalisation" />
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
            catData: null
        }
    },
    mixins: [FetchData],
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData(`https://api.thecatapi.com/v1/images/${this.id}`)
                    .then((fetchedData) => this.catData = fetchedData)
            },
            { immediate: true }
        )
    },
}
</script>
<style ></style>