export default {
    name: "FetchData",
    data() {
        return {
            loading: false,
            error: ""
        }
    },
    methods: {
        async fetchData(url) {
            this.loading = true
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-api-key": process.env.VUE_APP_THECATAPI_KEY
                    }
                })
                const data = await response.json()
                return data
            } catch (error) {
                console.log(error)
                this.error = "Could not fetch data :("
            } finally {
                this.loading = false
            }
        },
        canDisplayContent(data) {
            return (!this.error && !this.loading && data) ? true : false
        }
    }
}