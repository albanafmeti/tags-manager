<template>
    <transition name="fade">

        <Modal title="Add New Tag"
               subtitle="Add tags that you wish to apply to contacts."
               on-close="/">

            <LoadingText :is-loading="isLoading" text="Creating..."/>

            <AddTagForm ref="addTagForm"/>

            <template v-slot:actions>
                <router-link to="/" class="btn btn-cancel">Cancel</router-link>
                <a href="#" class="btn btn-secondary" @click.prevent="saveTag">Save Tag</a>
            </template>

        </Modal>
    </transition>
</template>

<script>
    import Modal from "../components/Modal";
    import AddTagForm from "../components/add-tag/AddTagForm";
    import LoadingText from "../components/LoadingText";

    import {mapGetters} from "vuex";

    export default {
        name: "AddTag",
        components: {LoadingText, AddTagForm, Modal},
        methods: {
            saveTag() {
                this.$refs.addTagForm.saveTag();
            }
        },
        computed: {
            ...mapGetters("tags", [
                "isLoading"
            ])
        }
    }
</script>

<style scoped>
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: 0.2s opacity ease-out;
    }
</style>
