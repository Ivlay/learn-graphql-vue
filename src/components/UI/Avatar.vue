<template>
    <div class="avatar">
        <div class="avatar__img">
            <img
                src="../../assets/no-one.png"
                width="40"
                height="40"
            />
        </div>
        <div class="avatar__name">
            <span>
                {{name}}:
            </span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: "Avatar",
        props: ["name"]
    });
</script>

<style lang="less" scoped>
    .avatar {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;

        .avatar__img {
            width: 1.8rem;
            height: 1.8rem;
        }

        .avatar__name {
            text-align: left;
        }
    }
</style>