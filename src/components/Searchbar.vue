<template>
    <select v-model="selected" @change="$emit('selectBreed', selected)" onfocus='this.size=5;' onblur='this.size=1;'
        onchange='this.size=1; this.blur();' class="form-select form-select-lg mb-4" aria-label="Default select example">
        <option value="all" selected>All Species</option>
        <option v-for="breed in breeds" :value="breed.id" :key="breed.id">{{ breed.name }}</option>
    </select>
</template>
<script>
export default {
    name: "Searchbar",
    props: {
        breeds: Array
    },
    data() {
        return {
            selected: "all"
        }
    },
    emits: ["selectBreed"]
}
</script>
<style></style>