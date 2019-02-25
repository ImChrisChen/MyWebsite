<template>
    <div>
        <header class="short-header">

            <div class="gradient-block"></div>

            <div class="row header-content">

                <div class="logo">
                    <router-link to="/">Author</router-link>
                </div>

                <nav id="main-nav-wrap">
                    <ul class="main-navigation sf-menu sf-js-enabled" style="touch-action: pan-y;">
                        <!-- li上的current类表示当前选中的样式 -->
                        <li v-for="(item, index) in navData" :class="navIndex === index ? 'current':''">
                            <router-link @click.native="bindSwitchNav(index)" :to="item.path">{{item.component}}
                            </router-link>
                        </li>

                        <div v-if="0">
                            <li class="has-children">
                                <a @mouseenter="showSubmenu" @mouseout="hideSubmenu" href="category.html" title=""
                                   class="sf-with-ul">Categories
                                </a>

                                <ul @mouseenter="showSubmenu" v-show="showMenu" class="sub-menu"
                                    style="display: block;">
                                    <li><a href="category.html">Wordpress</a></li>
                                    <li><a href="category.html">HTML</a></li>
                                    <li><a href="category.html">Photography</a></li>
                                    <li><a href="category.html">UI</a></li>
                                    <li><a href="category.html">Mockups</a></li>
                                    <li><a href="category.html">Branding</a></li>
                                </ul>
                            </li>
                            <li class="has-children">
                                <a href="single-standard.html" title="" class="sf-with-ul">Blog</a>
                                <ul class="sub-menu" style="display: none;">
                                    <li><a href="single-video.html">Video Post</a></li>
                                    <li><a href="single-audio.html">Audio Post</a></li>
                                    <li><a href="single-gallery.html">Gallery Post</a></li>
                                    <li><a href="single-standard.html">Standard Post</a></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/styles">Styles</router-link>
                            </li>
                            <li>
                                <router-link to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                        </div>
                    </ul>
                </nav> <!-- end main-nav-wrap -->

                <div :class="'search-wrap ' + (showSearch ? 'search-visible':'')">

                    <form role="search" method="get" class="search-form" action="#">
                        <label>
                            <span class="hide-content">Search for:</span>
                            <input type="search" class="search-field" placeholder="Type Your Keywords" value="" name="s"
                                   title="Search for:" autocomplete="off">
                        </label>
                        <input type="submit" class="search-submit" value="Search">
                    </form>

                    <a href="javascript:void(0)" @click="closeSearch" id="close-search" class="close-btn">Close</a>

                </div> <!-- end search wrap -->

                <div class="triggers">
                    <a class="search-trigger" @click="openSearchBox" href="javascript:void(0)">
                        <i class="fa fa-search"></i></a>
                    <a class="menu-toggle" href="#"><span>Menu</span></a>
                </div> <!-- end triggers -->

            </div>

        </header>
    </div>

</template>

<script>

	export default {
		data() {
			return {
				showMenu: false,
				showSearch: false,
				navData: [],
				navIndex: 0,
			}
		},
		created() {
			this.getNavData();
		},
		methods: {
			getNavData() {
				this.axios.get("/get_nav_data").then(res => {
					let navData = res.data;
					navData.forEach(item => {
						item.component = item.nav_name;
						item.path = item.nav_url;
						delete item.nav_name;
						delete item.nav_url;
					});
					this.navData = navData;
				});
			},

			bindSwitchNav(index) {
				this.navIndex = index;
			},

			showSubmenu() {
				this.showMenu = true;
				console.log(this.showMenu);
			},
			hideSubmenu() {
				this.showMenu = false;
				console.log(this.showMenu);
			},
			openSearchBox() {
				this.showSearch = true;
			},
			closeSearch() {
				this.showSearch = false;
			}
		},
		name: "my-header"
	}
</script>

<style scoped>
    .search-field::placeholder {
        color: #999 !important;
    }
</style>
