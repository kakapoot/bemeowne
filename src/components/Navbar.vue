<template>
    <header class="mb-5">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <router-link to="/" class="navbar-brand fs-3 fw-bold text-primary">BeMeowne</router-link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto fs-5 fw-semibold">
                        <li class="nav-item"><router-link to="/search" href="" class="nav-link">Search</router-link></li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: "Navbar",
}
</script>
<style></style>