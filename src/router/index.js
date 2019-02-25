import Vue from 'vue'
import Router from 'vue-router'
import about from '../components/about'

import home from '../components/home'
import contact from '../components/contact'
import styles from '../components/styles'
import article_detail from '../components/article_detail'
import resume from '../components/resume'
import blog from '../components/blog'

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			name: "home",
			component: home
		},
		{
			path: "/about",
			name: "about",
			component: about
		},
		{
			path: "/contact",
			name: "contact",
			component: contact
		},
		{
			path: "/styles",
			name: "styles",
			component: styles
		},
		{
			path: "/article_detail",
			name: "article_detail",
			component: article_detail
		},
		{
			path: "/resume",
			name: "resume",
			component: resume
		},
		{
			path: "/blog",
			name: "blog",
			component: blog
		},
	]
});

