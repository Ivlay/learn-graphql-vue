<template>
    <div class="rightPart__info">
        <strong>{{description}}: </strong>
        <span
            v-for ="item in data"
            :key  ="item"
            class ="list"
        >
            {{`${item}${data.length > 1 ? ',' : ''}`}}
        </span>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default Vue.extend({
        name: "DescriptionList",
        props: ["data", "description"]
    });
</script>

<style lang="less" scoped>
    .rightPart__info {
        color: #333;
        text-align: left;
        margin-bottom: 1rem;

        strong {
            margin-right: 0.5rem;
            width: 100%;
            display: inline-block;
        }

        .list {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }
</style>