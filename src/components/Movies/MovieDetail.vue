<template>
    <div class="movieDetail">
        <template v-if="$apollo.loading">
            <Loader />
        </template>
        <template v-if="!$apollo.loading">
            <div class="movieDetail__title">
                <h1>{{movieById.title}}</h1>
                <span>
                    {{movieById.year}}
                </span>
            </div>
            <div class="movieDetail__info">
                <div class="info__leftPart">
                    <div class="leftPart__img">
                        <img
                            height  ="600"
                            width   ="400"
                            @error  ="checkLoad"
                            :src    ="movieById.poster || checkLoad"
                            :alt    ="movieById.title"
                            loading ="lazy"
                        />
                    </div>
                    <span>
                        imdb: {{movieById.imdb.rating}}
                        votes: {{movieById.imdb.votes}}
                    </span>
                </div>
                <div class="info__rightPart">
                    <DescriptionList
                        description="Director"
                        :data="movieById.directors"
                    />
                    <DescriptionList
                        description="Cast"
                        :data="movieById.cast"
                    />
                    <DescriptionList
                        description="Genres"
                        :data="movieById.genres"
                    />
                    <p class="rightPart__description">
                        {{movieById.fullplot || 'movie description'}}
                    </p>
                </div>
            </div>
            <Comments
                v-if="movieById.comments.length"
                :comments="movieById.comments"
            />
        </template>
    </div>
</template>

<script>
    import Vue             from 'vue';
    import Loader          from '../UI/Loader.vue';
    import DescriptionList from './DescriptionList.vue';
    import Comments        from './Comments.vue';
    import { movieById }   from '../../graphql';

    export default Vue.extend({
        name: "MovieDetail",
        components: {
            Loader,
            DescriptionList,
            Comments
        },
        data() {
            return {
                routeParam: this.$route.params.id
            }
        },
        watch: {
            movieById(val) {
                this.$eventBus.$emit('qwe', {title: val.title, year: val.year})
            }
        },
        apollo: {
            movieById: {
                query: movieById,
                variables() {
                    return {
                        id: this.routeParam
                    }
                }
            }
        },
        methods: {
            checkLoad(event) {
                event.target.src = "https://ca.slack-edge.com/T45P9FH0X-UEDQ7H1DM-b764cb32c991-512"
            },
        }
    });
</script>

<style lang="less" scoped>
    .movieDetail {
        display: flex;
        align-items: center;
        flex-direction: column;

        .movieDetail__title {
            font-size: 1.5rem;
            margin-bottom: 2rem;

            h1 {
                margin-bottom: 0;
            }

            span {
                display: block;
                font-size: 1.3rem;
                margin-top: 0.5rem;
                opacity: 0.8;
            }
        }

        .movieDetail__info {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-around;

            .info__leftPart {
                .leftPart__img {
                    max-width: 26.66666rem;
                    width: 100%;
                    border-radius: 0.7rem;
                    overflow: hidden;
                    box-shadow: 0 0 0.7rem rgba(4, 36, 85, 0.7);
                    transition: transform 0.3s;
                    margin-bottom: 1rem;

                    img {
                        max-height: 40rem;
                    }
                }
            }

            .info__rightPart {
                height: 100%;
                max-width: 39.33333rem;
                position: relative;

                .rightPart__description {
                    line-height: 1.7rem;
                    text-align: left;
                    font-size: 1.4rem;
                    margin: 0;
                    margin-bottom: 1rem;
                }
            }
        }
    }
</style>