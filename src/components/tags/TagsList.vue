<template>
    <div class="table position-relative">

        <LoadingText :is-loading="isLoading"/>

        <table class="table" v-if="tags.length">
            <thead>
            <tr>
                <th>
                    <a href="#" @click.prevent="sort">
                        TAG NAME <i class="fa sort"
                                    :class="{'fa-chevron-down' : sortType === 'asc', 'fa-chevron-up': sortType === 'desc'}"></i>
                    </a>
                </th>

                <th class="text-right">CONTACTS</th>

                <th>CREATED BY</th>

                <th>DATE CREATED</th>

                <th class="text-right">ACTIONS</th>
            </tr>
            </thead>

            <tbody>
            <SingleTag v-for="tag in tags" :key="tag.id" :tag="tag"/>
            </tbody>

        </table>

        <p v-if="!tags.length && !isLoading" class="no-records">There is no any tag.</p>

    </div>
</template>

<script>
    import SingleTag from "./SingleTag";
    import {mapGetters, mapActions} from 'vuex';
    import LoadingText from "../LoadingText";

    export default {
        name: "TagsList",
        components: {LoadingText, SingleTag},
        props: ["tags"],
        computed: {
            ...mapGetters("tags", [
                "sortType",
                "isLoading"
            ])
        },
        methods: {

            ...mapActions("tags", [
                "sortTags"
            ]),

            sort() {
                if (this.sortType === "asc") {
                    this.sortTags("desc");
                } else {
                    this.sortTags("asc");
                }
            }
        }
    }
</script>
