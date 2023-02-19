<template>
    <select onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'
        class="form-select form-select-lg mb-5" aria-label="Default select example">
        <option value="all" selected>All Species</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</template>
<script>
export default {
    name: "Searchbar",
}
</script>
<style></style>