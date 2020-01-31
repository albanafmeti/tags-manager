<template>
    <div>
        <div class="loader" v-if="isLoading">
            <div class="loading-text">{{ theText }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoadingText",
        props: ["isLoading", "text"],
        computed: {
            theText() {
                return this.text ? this.text : "Loading..."
            }
        }
    }
</script>
