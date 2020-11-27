<template>
    <div class="loader">
        <img src="../../assets/loader.svg"
            alt="loading..."
        >
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "Loader"
    });
</script>

<style lang="less" scoped>
    .loader {
        width: 200px;
        height: 200px;
    }
</style>
