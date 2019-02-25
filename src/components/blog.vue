<template>
    <div>
        <div class="classify-line">
            <ul class="stats-tabs">
                <li v-for="item in articleTypeData">
                    <a @click="bindSwitchType(item.article_type_id)" href="#">{{item.article_type_name}}
                        <em>{{item.type_count}}</em></a>
                </li>
            </ul>
        </div>

        <section id="bricks">

            <div class="row masonry">

                <!-- brick-wrapper -->
                <div class="bricks-wrapper" style="position: relative; display: flex; flex-wrap: wrap">

                    <div class="bricks-wrapper-box">

                        <div v-for="articleList in currentTypeArticle" ref="LayoutColumn"
                             class="bricks-column">
                            <template v-for="(item, index) in articleList">
                                <article class="brick entry format-standard" style="width: 100%;">

                                    <div class="entry-thumb">
                                        <router-link to="/article_detail" class="thumb-link">
                                            <!--<img :src="'../assets/images/thumbs/' + item.article_img" alt="building">-->
                                            <img :src="'/images/thumbs/' + item.article_img" alt="building">
                                        </router-link>
                                    </div>

                                    <div class="entry-text">
                                        <div class="entry-header">

                                            <div class="entry-meta">
                                                <span class="cat-links">
                                                    <a href="javascript:void(0);">{{item.article_subtitle}}</a>
                                                </span>
                                            </div>

                                            <h1 class="entry-title">
                                                <router-link to="/article_detail">{{item.article_title}}</router-link>
                                            </h1>

                                        </div>
                                        <div class="entry-excerpt">
                                            {{item.article_desc}}
                                        </div>
                                    </div>

                                </article> <!-- end article -->
                            </template>
                        </div>

                    </div>


                </div> <!-- end brick-wrapper -->

            </div> <!-- end row -->

            <div v-if="0" class="row">

                <nav class="pagination">
                    <span class="page-numbers prev inactive">Prev</span>
                    <span class="page-numbers current">1</span>
                    <a href="#" class="page-numbers">2</a>
                    <a href="#" class="page-numbers">3</a>
                    <a href="#" class="page-numbers">4</a>
                    <a href="#" class="page-numbers">5</a>
                    <a href="#" class="page-numbers">6</a>
                    <a href="#" class="page-numbers">7</a>
                    <a href="#" class="page-numbers">8</a>
                    <a href="#" class="page-numbers">9</a>
                    <a href="#" class="page-numbers next">Next</a>
                </nav>

            </div>

        </section>

    </div>
</template>

<script>
	export default {
		name: "blog",

		data() {
			return {
				articleTypeData: [],
				currentTypeArticle: [[], [], [], []],
			}
		},

		created() {
			this.getArticleTypeData();
		},

		methods: {

			getArticleTypeData() {
				this.axios.get("/get_article_type").then(res => {
					if (res.status === 200) {
						this.articleTypeData = res.data;
						this.getCurrentTypeArticle(this.articleTypeData[0].article_type_id);
					}
				});
			},

			bindSwitchType(id) {
				console.log(id);
				this.getCurrentTypeArticle(id);
			},

			getCurrentTypeArticle(id) {
				this.axios.get(`/get_current_type_article/${id}`).then(res => {
					if (res.status === 200) {
						console.log(res.data);
						let currentTypeArticle = [[], [], [], []];
						res.data.forEach((item, index) => {
							if (index % 4 === 0) {
								currentTypeArticle[0].push(item);
							} else if (index % 4 === 1) {
								currentTypeArticle[1].push(item);
							} else if (index % 4 === 2) {
								currentTypeArticle[2].push(item);
							} else if (index % 4 === 3) {
								currentTypeArticle[3].push(item);
							}
						});
						this.currentTypeArticle = currentTypeArticle;
						console.log(this.currentTypeArticle);
					}
				});
			},
		},

	}
</script>

<style scoped>

    .classify-line {
        display: flex;
        justify-content: center;
        font-weight: bold;
        margin-top: 50px;
        text-align: center;
    }
</style>
