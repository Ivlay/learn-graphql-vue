<template>
    <div
        class="moveDetail__comments"
    >
        <h3 class="comments__title">
            {{`Comment${comments.length > 1 ? 's' : ''}:`}}
        </h3>
        <div
            class="comments__comment"
            v-for="comment in comments"
            :key="comment.text"
        >
            <Avatar
                :name="comment.name"
            />
            <p
                class="comment__text"
            >
                {{comment.text}}
            </p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Avatar from '../UI/Avatar.vue';


    export default Vue.extend({
        name: "Comments",
        components: {
            Avatar
        },
        props: ["comments"]
    });
</script>

<style lang="less" scoped>
    .moveDetail__comments {
        margin: 2rem 0;
        padding: 1rem;
        border-radius: 4px;
        box-shadow: inset 1px 1px 20px rgba(0, 0, 0, 0.06);

        .comments__title {
            margin-bottom: 0;
        }

        .comments__comment {
            margin: 1rem 0;
            max-width: 60rem;

            .comment__text {
                line-height: 1.4rem;
                text-align: left;
                margin: 0;
            }
        }
    }
</style>