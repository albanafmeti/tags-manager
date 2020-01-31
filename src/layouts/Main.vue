<template>

    <div>

        <NotificationAlert/>

        <div class="container">

            <div class="content">

                <div class="header">
                    <h1 class="page-title">{{ pageTitle }}</h1>
                </div>


                <div class="page-actions">

                    <slot name="page-actions"></slot>

                </div>


                <div class="page-content">

                    <slot></slot>

                </div>

            </div>

            <Footer/>

        </div>
    </div>

</template>

<script>
    import Footer from "../components/Footer";
    import NotificationAlert from "../components/NotificationAlert";

    export default {
        name: "Main",
        components: {NotificationAlert, Footer},
        props: ["pageTitle"]
    }
</script>
