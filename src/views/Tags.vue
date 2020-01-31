<template>
    <Main page-title="TAGS">

        <template v-slot:page-actions>

            <router-link to="/add" class="btn btn-primary"><i class="fa fa-plus"></i>Add New Tag</router-link>

        </template>

        <TagsList :tags="tags"/>

        <router-view></router-view>

    </Main>
</template>

<script>
    import TagsList from "../components/tags/TagsList";
    import Footer from "../components/Footer";
    import Main from "../layouts/Main";

    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'tags',
        components: {Main, Footer, TagsList},
        methods: {
            ...mapActions('tags', [
                'getTags'
            ])
        },
        computed: {
            ...mapGetters('tags', [
                'tags'
            ])
        },
        created() {
            this.getTags();
        }
    }
</script>
