<template>
    <div id="app">
		<MainLayout>
			<transition name="fade" mode="out-in">
				<router-view v-if="true"/>
			</transition>
		</MainLayout>
    </div>
</template>

<script lang="ts">
	import Vue        from "vue";
	import MainLayout from "./layouts/MainLayout.vue";

	export default Vue.extend({
		name: "App",
		components: {
			MainLayout
		},
	});
</script>

<style lang='less'>
	@import "./styles/style.less";
	body {
		margin: 0;
		min-height: 100vh;
		box-sizing: border-box;
		color: @LIGHT_COLOR;
		font-size: 15px;
		font-family: 'Lato', sans-serif;
	}

	@font-face {
		font-family: 'Lato', sans-serif;
		src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,100;1,400&display=swap');
	}

	body,
	html {
		height: 100%;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .3s;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
</style>
