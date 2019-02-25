<template>
    <div id="app">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
	import myHeader from './components/common/my-header'
	import myFooter from './components/common/my-footer'
	import home from './components/home'

	export default {
		name: 'app',
		data() {
			return {
				navData: [],
				articleData: []
			}
		},
		created() {
			// this.getNavData();
		},
		methods: {},
		components: {
			myHeader,
			home,
			myFooter,
		}
	}
</script>

<style>

</style>
