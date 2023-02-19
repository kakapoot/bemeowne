<template>
    <li class="col">
        <div class="bg-light h-100">
            <img :src="imgSrc" class="bd-placeholder-img card-img-top" height="225" style="object-fit:cover">
            <div class="card-body p-5 d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <button type="button" class="btn btn-lg btn-primary text-light">View Details</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                </div>
                <h3 class="card-title">{{ breed }}, <strong>{{ country }}</strong></h3>
                <p class="card-text fs-5">{{ description }}</p>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    name: "Card",
    props: {
        imgSrc: String,
        breed: String,
        country: String,
        description: String
    }
}
</script>
<style></style>