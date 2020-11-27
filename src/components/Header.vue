<template>
    <header class="header">
        <div
            class="header__logo"
            @click="handleClickLogo"
        >
            <img
                src="../assets/logo.svg"
            />
        </div>
        <nav
            v-if="$route.path !== '/'"
        >
            <a
                :href="`https://www.google.com/search?q=${this.qwe.title} ${this.qwe.year}`"
                target='_blank'
                rel="noreferer"
            >
                <span>
                    Choose this movie
                </span>
            </a>
        </nav>
    </header>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Header',
        methods: {
            handleClickLogo() {
                if (this.$route.path !== '/') {
                    this.$router.push('/')
                }
            }
        },
        data() {
            return {
                qwe: {}
            }
        },
        created() {
            this.$eventBus.$on('qwe', (test) => this.qwe = test)
        },
        beforeDestroy() {
            this.$eventBus.$off('qwe')
        }
    });
</script>

<style lang="less" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height: 4rem;
        height: 100%;

        a {
            text-decoration: none;
            color: lightblue
        }

        .header__logo {
            cursor: pointer;
            height: 60px;
            width: 90px;
        }
    }
</style>