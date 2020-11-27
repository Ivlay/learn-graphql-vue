<template>
    <div class="wrapper">
        <Button
            @handleButtonClick="handleGetRandomMovie"
            label="Random!"
            :disabled="$apollo.loading"
        />
        <div class="landing">
            <template v-if="$apollo.loading">
                <Loader />
            </template>
            <template v-if="!$apollo.loading">
                <transition name="fade" mode="out-in">
                    <div :key="randomMovie._id" v-if="true">
                        <PreviewMovie
                            :data="randomMovie"
                        />
                    </div>
                </transition>
            </template>
        </div>
        <Button
            label="Check"
            @handleButtonClick="handleGoToMovie"
            :disabled="$apollo.loading"
        />
    </div>
</template>

<script>
    import Vue          from 'vue';
    import gql          from 'graphql-tag';
    import PreviewMovie from './Movies/PreviewMovie.vue';
    import Loader       from './UI/Loader.vue';
    import Button       from './UI/Button.vue';

    export default Vue.extend({
        name: 'Landing',
        components: {
            PreviewMovie,
            Loader,
            Button
        },
        apollo: {
            randomMovie: {
                query: gql`
                query randomMovie {
                    randomMovie {
                        _id
                        title
                        poster
                        plot
                    }
                }
            `,
            }
        },
        methods: {
            handleGetRandomMovie() {
                this.$apollo.queries.randomMovie.refetch()
            },
            handleGoToMovie() {
                this.$router.push(this.randomMovie._id);
            }
        }
    })
</script>

<style lang="less" scoped>
    .wrapper {
        padding: 1.5rem 0;
        height: 100%;

        .landing {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            align-items: center;

            .fade-enter-active, .fade-leave-active {
                transition: opacity .3s linear;
                position: absolute;
                top: 0;
            }

            .fade-enter, .fade-leave-to {
                opacity: 0;
            }
        } 
    }   
</style>
