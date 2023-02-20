<template>
    <div class="col">
        <div class="bg-light h-100">
            <img :src="imgSrc" class="card-img-top" height="225" style="object-fit:cover">
            <div class="card-body p-5 d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <button type="button" @click="redirectToCatDetails(id)" class="btn btn-lg btn-primary text-light">View
                        Details</button>
                </div>
                <h3 class="card-title">{{ breed }}, <strong>{{ country }}</strong></h3>
                <p class="card-text fs-5">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router';

export default {
    name: "Card",
    props: {
        imgSrc: String,
        breed: String,
        country: String,
        description: String,
        id: String
    },
    methods: {
        redirectToCatDetails(id) {
            router.push(`/cat/${id}`)
        }
    }
}
</script>
<style></style>