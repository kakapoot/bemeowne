<template>
    <span class="fs-5 fw-semibold">{{ getStatName }}</span>
    <div class="progress mb-2">
        <div class="progress-bar" role="progressbar" :style="`width: ${getStatPercentage}%`"
            :aria-valuenow="getStatPercentage" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</template>
<script>
export default {
    name: "Statbar",
    props: {
        name: String,
        value: Number
    },
    computed: {
        // stat value is on a scale of 1-5
        getStatPercentage() {
            return (this.value / 5) * 100
        },
        getStatName() {
            return this.name.
                // insert a space before all caps
                replace(/([A-Z])/g, ' $1')
                // uppercase the first character
                .replace(/^./, function (str) { return str.toUpperCase(); })
        }
    }
}
</script>
<style></style>