<template>
    <div class="mainLayout">
        <div class="container">
            <Header />
            <slot />
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from '../components/Header';

    export default Vue.extend({
        name: 'MainLayout',
        components: {
            Header
        },
        methods: {
            qwe(data) {
                console.log('object :>> ', data);
            }
        }
    })
</script>

<style lang='less' scoped>
	@import "../styles/style.less";

	.mainLayout {
        background-color: @MAIN_BACKGROUND;
        height: 100%;
        min-height: 100vh;

        .container {
            display: flex;
            flex-direction: column;
            max-width: 80rem;
            padding: 0 1.33333rem;
            height: 100%;
            margin: 0 auto;
        }
    }
</style>