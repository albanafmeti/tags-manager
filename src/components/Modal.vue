<template>
    <div class="modal-container">

        <div class="opacity"></div>

        <div class="modal">

            <p class="text-right">
                <router-link :to="onClose"><i class="fa fa-times close"></i></router-link>
            </p>

            <div class="modal-content">

                <h3 class="modal-title text-center">{{ title }}</h3>
                <p class="modal-subtitle">{{ subtitle }}</p>

                <slot></slot>

            </div>

            <div class="modal-footer">

                <slot name="actions"></slot>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: ["title", "subtitle", "onClose"]
    }
</script>

<style scoped>

</style>
