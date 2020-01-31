<template>
    <tr>
        <td>
            <span class="tag tag-default" :style="{ 'background': `#${tag.color}` }">{{ tag.name }}</span>
        </td>
        <td class="text-right">0</td>
        <td>
            Administrator <a href="mailto:admin@autoklose.com">admin@autoklose.com</a>
        </td>
        <td class="font-w-light">
            October 14, 2019
        </td>
        <td class="text-right">
            <a class="primary" href="#" @click.prevent="deleteIt">Delete</a>
        </td>
    </tr>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        name: "SingleTag",
        props: ["tag"],
        methods: {
            ...mapActions("tags", [
                "deleteTag"
            ]),
            deleteIt() {
                this.deleteTag(this.tag.id);
            }
        }
    }
</script>
