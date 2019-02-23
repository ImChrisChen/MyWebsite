<template>
    <div id="app">
        <my-header></my-header>
        <home-body :article-data="articleData"></home-body>
    </div>
</template>

<script>
	import myHeader from './components/common/my-header'
	import homeBody from './components/home-body'

	export default {
		name: 'app',
		data() {
			return {
				navData: [],
				articleData: []
			}
		},
		created() {
			this.getNavData();
			this.getArticleData();
		},
		methods: {
			getNavData() {
				this.axios.get("/get_nav_data").then(res => {
					console.log(res);
					this.navData = res.data;
					// this.$router.addRoutes()
				});
			},
			getArticleData() {
				this.axios.get("/get_article_data").then(res => {
					this.articleData = res.data;
					console.log(res);
				});
			}
		},
		components: {
			myHeader,
			homeBody
		}
	}
</script>

<style>

</style>
