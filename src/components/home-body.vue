<template>
    <div>
        <section id="bricks">

            <div class="row masonry">

                <!-- brick-wrapper -->
                <div class="bricks-wrapper" style="position: relative; display: flex; flex-wrap: wrap">

                    <!--<div class="grid-sizer"></div>-->

                    <!-- 轮播图 -->
                    <div v-if="0" class="brick entry featured-grid" style="position: absolute; left: 0%; top: 0px;">
                        <div class="entry-content">
                            <div id="featured-post-slider" class="flexslider">
                                <ul class="slides">

                                    <li class="flex-active-slide"
                                        style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;">
                                        <div class="featured-post-slide">

                                            <div class="post-background"
                                                 style="background-image:url('../assets/images/thumbs/featured/featured-1.jpg');"></div>

                                            <div class="overlay"></div>

                                            <div class="post-content">
                                                <ul class="entry-meta">
                                                    <li>September 06, 2016</li>
                                                    <li><a href="#">Naruto Uzumaki</a></li>
                                                </ul>

                                                <h1 class="slide-title"><a href="single-standard.html" title="">Minimalism
                                                    Never Goes Out of Style</a></h1>
                                            </div>

                                        </div>
                                    </li> <!-- /slide -->

                                    <li style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                                        class="">
                                        <div class="featured-post-slide">

                                            <div class="post-background"
                                                 style="background-image:url('../assets/images/thumbs/featured/featured-2.jpg');"></div>

                                            <div class="overlay"></div>

                                            <div class="post-content">
                                                <ul class="entry-meta">
                                                    <li>August 29, 2016</li>
                                                    <li><a href="#">Sasuke Uchiha</a></li>
                                                </ul>

                                                <h1 class="slide-title"><a href="single-standard.html" title="">Enhancing
                                                    Your Designs with Negative Space</a></h1>
                                            </div>

                                        </div>
                                    </li> <!-- /slide -->

                                    <li style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                                        class="">
                                        <div class="featured-post-slide">

                                            <div class="post-background"
                                                 style="background-image:url('../assets/images/thumbs/featured/featured-3.jpg');;"></div>

                                            <div class="overlay"></div>

                                            <div class="post-content">
                                                <ul class="entry-meta">
                                                    <li>August 27, 2016</li>
                                                    <li><a href="#" class="author">Naruto Uzumaki</a></li>
                                                </ul>

                                                <h1 class="slide-title"><a href="single-standard.html" title="">Music
                                                    Album Cover Designs for Inspiration</a></h1>
                                            </div>

                                        </div>
                                    </li> <!-- end slide -->

                                </ul> <!-- end slides -->
                                <ul class="flex-direction-nav">
                                    <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
                                    <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
                                </ul>
                            </div> <!-- end featured-post-slider -->
                        </div> <!-- end entry content -->
                    </div>

                    <template v-for="item in articleData">
                        <article class="brick entry format-standard" style="">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <!--<img :src="'../assets/images/thumbs/' + item.article_img" alt="building">-->
                                    <img :src="'/images/thumbs/' + item.article_img" alt="building">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
                                    <a href="javascript:void(0);">{{item.article_subtitle}}</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">{{item.article_title}}</a>
                                    </h1>

                                </div>
                                <div class="entry-excerpt">
                                    {{item.article_desc}}
                                </div>
                            </div>

                        </article> <!-- end article -->
                    </template>

                    <div v-if="0">
                        <article class="brick entry format-standard">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/ferris-wheel.jpg" alt="ferris wheel">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Design</a>
									<a href="#">UI</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">This Is Another Standard
                                        Format
                                        Post.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <!-- format audio here -->
                        <article class="brick entry format-audio">

                            <div class="entry-thumb">
                                <a href="single-audio.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/concert.jpg" alt="concert">
                                </a>

                                <div class="audio-wrap">
                                    <span class="mejs-offscreen">Audio Player</span>
                                    <div id="mep_0" class="mejs-container svg mejs-audio" tabindex="0"
                                         role="application"
                                         aria-label="Audio Player" style="width: 100%; height: 42px;">
                                        <div class="mejs-inner">
                                            <div class="mejs-mediaelement">
                                                <audio id="player"
                                                       src="media/AirReview-Landmarks-02-ChasingCorporate.mp3"
                                                       width="100%" height="42"></audio>
                                            </div>
                                            <div class="mejs-layers">
                                                <div class="mejs-poster mejs-layer"
                                                     style="display: none; width: 100%; height: 42px;"></div>
                                            </div>
                                            <div class="mejs-controls">
                                                <div class="mejs-button mejs-playpause-button mejs-play">
                                                    <button type="button" aria-controls="mep_0" title="Play"
                                                            aria-label="Play"></button>
                                                </div>
                                                <div class="mejs-time-rail" style="width: 269px;"><span
                                                        class="mejs-time-total mejs-time-slider" style="width: 269px;"
                                                        aria-label="Time Slider" aria-valuemin="0" aria-valuemax="NaN"
                                                        aria-valuenow="0" aria-valuetext="00:00" role="slider"
                                                        tabindex="0"><span
                                                        class="mejs-time-buffering" style="display: none;"></span><span
                                                        class="mejs-time-loaded" style="width: 269px;"></span><span
                                                        class="mejs-time-current" style="width: 0px;"></span><span
                                                        class="mejs-time-handle" style="left: -5px;"></span><span
                                                        class="mejs-time-float"><span
                                                        class="mejs-time-float-current">00:00</span><span
                                                        class="mejs-time-float-corner"></span></span></span></div>
                                                <div class="mejs-button mejs-volume-button mejs-mute">
                                                    <button type="button" aria-controls="mep_0" title="Mute"
                                                            aria-label="Mute"></button>
                                                </div>
                                                <a href="javascript:void(0);"
                                                   class="mejs-horizontal-volume-slider mejs-mute"
                                                   aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100"
                                                   aria-valuenow="80" aria-valuetext="80%" role="slider"
                                                   tabindex="0"><span
                                                        class="mejs-offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>
                                                    <div class="mejs-horizontal-volume-total"></div>
                                                    <div class="mejs-horizontal-volume-current"
                                                         style="width: 40px;"></div>
                                                    <div class="mejs-horizontal-volume-handle"
                                                         style="left: 27px;"></div>
                                                </a></div>
                                            <div class="mejs-clear"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Design</a>
									<a href="#">Music</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-audio.html">This Is a Audio Format Post.</a>
                                    </h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- /article -->

                        <article class="brick entry format-quote">

                            <div class="entry-thumb">
                                <blockquote>
                                    <p>Good design is making something intelligible and memorable. Great design is
                                        making
                                        something memorable and
                                        meaningful.</p>

                                    <cite>Dieter Rams</cite>
                                </blockquote>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/shutterbug.jpg" alt="Shutterbug">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Photography</a>
									<a href="#">html</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">Photography Skills Can
                                        Improve
                                        Your Graphic Design.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/usaf-rocket.jpg" alt="USAF rocket">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Branding</a>
									<a href="#">Mockup</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">The 10 Golden Rules of Clean
                                        Simple Design.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry format-gallery group">

                            <div class="entry-thumb">

                                <div class="post-slider flexslider">
                                    <ul class="slides">
                                        <li class="flex-active-slide" data-thumb-alt=""
                                            style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;">
                                            <img src="../assets/images/thumbs/gallery/work1.jpg" draggable="false">
                                        </li>
                                        <li data-thumb-alt=""
                                            style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                                            class="">
                                            <img src="../assets/images/thumbs/gallery/work2.jpg" draggable="false">
                                        </li>
                                        <li data-thumb-alt=""
                                            style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                                            class="">
                                            <img src="../assets/images/thumbs/gallery/work3.jpg" draggable="false">
                                        </li>
                                    </ul>
                                    <ol class="flex-control-nav flex-control-paging">
                                        <li><a href="#" class="flex-active">1</a></li>
                                        <li><a href="#" class="">2</a></li>
                                        <li><a href="#" class="">3</a></li>
                                    </ol>
                                </div>

                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Branding</a>
									<a href="#">Wordpress</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-gallery.html">Workspace Design Trends and
                                        Ideas.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry format-link">

                            <div class="entry-thumb">
                                <div class="link-wrap">
                                    <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
                                    <cite>
                                        <a target="_blank" href="#">http://sc.chinaz.com</a>
                                    </cite>
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/diagonal-pattern.jpg" alt="Pattern">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Design</a>
									<a href="#">UI</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">You Can See Patterns
                                        Everywhere.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry format-video">

                            <div class="entry-thumb video-image">
                                <a href="" data-lity="">
                                    <img src="../assets/images/thumbs/ottawa-bokeh.jpg" alt="bokeh">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Design</a>
									<a href="#">Branding</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-video.html">This Is a Video Post Format.</a>
                                    </h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/lighthouse.jpg" alt="Lighthouse">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Photography</a>
									<a href="#">Design</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">Breathtaking Photos of
                                        Lighthouses.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->

                        <article class="brick entry">

                            <div class="entry-thumb">
                                <a href="single-standard.html" class="thumb-link">
                                    <img src="../assets/images/thumbs/liberty.jpg" alt="Liberty">
                                </a>
                            </div>

                            <div class="entry-text">
                                <div class="entry-header">

                                    <div class="entry-meta">
								<span class="cat-links">
									<a href="#">Branding</a>
									<a href="#">html</a>
								</span>
                                    </div>

                                    <h1 class="entry-title"><a href="single-standard.html">Designing With Black and
                                        White.</a></h1>

                                </div>
                                <div class="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
                                    sit
                                    proident dolor nulla sed
                                    commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in
                                    aliqua cillum in consequat
                                    consequat in culpa in anim.
                                </div>
                            </div>

                        </article> <!-- end article -->
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
		name: "home-body",
		props: ["articleData"],
		data() {
			return {}
		}
	}
</script>

<style scoped>

</style>
