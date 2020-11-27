<template>
    <button
        @click="onClick"
    >
        <span>
            {{label}}
        </span>
    </button>
</template>

<script>
    import Vue from "vue";
    export default Vue.extend({
        name: "Button",
        props: ["label", "disabled"],
        methods: {
            onClick() {
                !this.disabled && this.$emit('handleButtonClick')
            }
        }
    });
</script>

<style lang="less" scoped>
    button {
        border: none;
        cursor: pointer;
        font-family: 'Lato', sans-serif;
        padding: 0;
        background-color: transparent;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        padding: 0.5rem;
        max-width: 15rem;
        width: 100%;
        outline-style: none;

        span {
            font-size: 1.3rem;
            color: rgba(30, 36, 37, 0.67);
        }
    }
</style>