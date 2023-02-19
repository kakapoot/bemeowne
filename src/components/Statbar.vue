<template>
    <span class="fs-5 fw-semibold">{{ statName }}</span>
    <div class="progress mb-2">
        <div class="progress-bar" role="progressbar" :style="`width: ${getStatPercentage}%`"
            :aria-valuenow="getStatPercentage" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</template>
<script>
export default {
    name: "Statbar",
    props: {
        statName: String,
        stat: Number
    },
    computed: {
        getStatPercentage() {
            return (this.stat / 5) * 100
        }
    }
}
</script>
<style></style>