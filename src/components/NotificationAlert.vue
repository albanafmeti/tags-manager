<template>
    <div>

        <div class="alert alert-success" v-if="hasSuccess && successMsg">
            <p>
                <strong>Success: </strong> {{ successMsg }}
            </p>
            <i class="fa fa-times" @click.prevent="clearSuccess"></i>
        </div>

        <div class="alert alert-error" v-if="hasError && errorMsg">
            <p>
                <strong>Error: </strong> {{ errorMsg }}
            </p>
            <i class="fa fa-times" @click.prevent="clearError"></i>
        </div>

    </div>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "NotificationAlert",
        methods: {
            ...mapActions([
                "clearSuccess",
                "clearError"
            ])
        },
        computed: {
            ...mapGetters([
                "hasSuccess",
                "successMsg",
                "hasError",
                "errorMsg",
            ])
        },
    }
</script>
