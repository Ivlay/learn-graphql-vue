<template>
    <div class="previewMovie">
        <div class="previewMovie__title">{{data.title}}</div>
        <div
            class       ="previewMovie__img"
            @mousemove  ="animateCard"
            @mouseleave ="stopAnimateCard"
        >
            <img
                height  ="600"
                width   ="400"
                @error  ="checkLoad"
                :src    ="data.poster || checkLoad"
                :alt    ="data.title"
                loading ="lazy"
            />
        </div>
        <p>{{data.plot || 'random movie description'}}</p>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'PreviewMovie',
        props: {
            data: Object
        },
        methods: {
            checkLoad(event) {
                event.target.src = "https://ca.slack-edge.com/T45P9FH0X-UEDQ7H1DM-b764cb32c991-512"
            },
            animateCard(event) {
                const eventItem = event.path[1];
                const middleItem = {
                    height: eventItem.offsetHeight / 2,
                    width: eventItem.offsetWidth / 2
                };

                eventItem.style.transform = `rotateY(${(event.offsetX - middleItem.height) / 20}deg)
                rotateX(${-(event.offsetY - middleItem.width) / 25}deg)`
            },
            stopAnimateCard(event) {
                event.fromElement.style.transform = '';
            }
        }
    });
</script>

<style lang="less" scoped>
    .previewMovie {
        perspective: 66.66666rem;
        transform-style: preserve-3d;
        margin: 1.7rem auto;

        .previewMovie__title {
            font-size: 2rem;
        }

        .previewMovie__img {
            margin: 1.3rem auto;
            max-width: 26.66666rem;
            width: 100%;
            border-radius: 0.7rem;
            overflow: hidden;
            box-shadow: 0 0 0.7rem rgba(4, 36, 85, 0.7);
            transition: transform 0.3s;

            img {
                max-height: 40rem;
            }
        }

        p {
            max-width: 50rem;
            font-size: 1.3rem;
            margin-bottom: 0;
        }
    }

</style>