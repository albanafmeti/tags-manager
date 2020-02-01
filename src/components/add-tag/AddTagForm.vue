<template>
    <form class="form">

        <div class="input-group">

            <label for="name">TAG NAME</label>
            <input type="text" id="name" class="input" :class="{'input-error': errors.name }"
                   placeholder="e.g. Tagliatele" v-model="name"/>
            <p class="input-error-text" v-if="errors.name">{{ errors.name }}</p>

        </div>

        <div class="input-group">

            <label>TAG COLOR</label>

            <div class="input-color">

                <div class="color-row" v-for="group in colors">
                    <div class="color" v-for="item in group" :style="{'background': item }"
                         @click="selectColor(item)">
                        <i class="fa fa-check" v-if="color === item"></i>
                    </div>

                </div>

            </div>

            <p class="input-error-text" v-if="errors.color">{{ errors.color }}</p>

        </div>

    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "AddTagForm",
        data: function () {
            return {
                name: null,
                color: null,

                errors: {
                    name: null,
                    color: null
                },

                colors: [
                    [
                        "#B8E75A",
                        "#44AF68",
                        "#3398DB",
                        "#0D638C",
                        "#E75ADC",
                        "#8E36EB",
                        "#FFEA00",
                        "#EBBE36",
                    ],
                    [
                        "#F39C19",
                        "#EB6236",
                        "#E84B3C",
                        "#C0382B",
                        "#3F312B",
                        "#A9B4B7",
                        "#838A8C",
                        "#2B3B3F",
                    ]
                ]
            }
        },
        watch: {
            name(newValue) {

                if (newValue) {
                    this.errors.name = null;
                }

                this.name = this.name.toUpperCase();
            },

            color(newValue) {

                if (newValue) {
                    this.errors.color = null;
                }
            },

            validationErrors(errors) {
                this.errors.name = errors.name ? errors.name[0] : null;
                this.errors.color = errors.color ? errors.color[0] : null;
            }
        },
        computed: {
            ...mapGetters([
                "validationErrors"
            ])
        },
        methods: {

            selectColor(color) {
                this.color = color;
            },

            saveTag() {

                this.createTag({
                    name: this.name,
                    color: this.color ? this.color.substr(1).toUpperCase() : null,
                }).then(response => {
                    if (response) {
                        this.$router.push({name: 'tags'});
                    }
                });
            },

            ...mapActions("tags", [
                "createTag"
            ])
        }
    }
</script>
