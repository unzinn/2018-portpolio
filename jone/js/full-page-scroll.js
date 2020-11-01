/**
 * Full page
 */
(function () {
	'use strict';

	/**
	 * Full scroll main function
	 */
	var fullScroll = function (params) {
		/**
		 * Main div
		 * @type {Object}
		 */
		var main = document.getElementById('main');

		/**
		 * Sections div
		 * @type {Array}
		 */
		var sections = main.getElementsByClassName('section');

		/**
		 * Full page scroll configurations
		 * @type {Object}
		 */
		var defaults = {
			container : main,
			sections : sections,
			animateTime : params.animateTime || 0.7,
			animateFunction : params.animateFunction || 'ease',
			maxPosition: sections.length - 1,
			currentPosition: 0,
			displayDots: typeof params.displayDots != 'undefined' ? params.displayDots : true,
			dotsPosition: params.dotsPosition || 'left'
		};

		this.defaults = defaults;
		/**
		 * Init build
		 */
		this.init();
	};

	/**
	 * Init plugin
	 */
	fullScroll.prototype.init = function () {
		this.buildSections()
			.buildDots()
			.buildPublicFunctions()
			.addEvents();

		var anchor = location.hash.replace('#', '').split('/')[0];
		location.hash = 0;
		this.changeCurrentPosition(anchor);
	};

	/**
	 * Build sections
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	/**
	 * Build dots navigation
	 * @return {Object} this (fullScroll)
	 */
	fullScroll.prototype.buildDots = function () {
		this.ul = document.createElement('ul');
		this.ul.classList.add('dots');
		this.ul.classList.add(this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left');
		var _self = this;
		var sections = this.defaults.sections;

		for (var i = 0; i < sections.length; i++) {
			var li = document.createElement('li');
			var a = document.createElement('a');

			a.setAttribute('href', '#' + i);
			li.appendChild(a);
			_self.ul.appendChild(li);
		}

		this.ul.childNodes[0].firstChild.classList.add('active');

		if (this.defaults.displayDots) {
			document.body.appendChild(this.ul);
		}

		return this;
	};

	/**
	 * Add Events
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.addEvents = function () {

		if (document.addEventListener) {
			document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.addEventListener('wheel', this.mouseWheelAndKey, false);
			document.addEventListener('keyup', this.mouseWheelAndKey, false);
			document.addEventListener('touchstart', this.touchStart, false);
			document.addEventListener('touchend', this.touchEnd, false);
			window.addEventListener("hashchange", this.hashChange, false);

			/**
			 * Enable scroll if decive don't have touch support
			 */
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				if(!('ontouchstart' in window)){
					document.body.style = "overflow: scroll;";
					document.documentElement.style = "overflow: scroll;";
				}
			}

		} else {
			document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
			document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
		}

		return this;
	};

	/**
	 * Build public functions
	 * @return {[type]} [description]
	 */
	fullScroll.prototype.buildPublicFunctions = function () {
		var mTouchStart = 0;
		var mTouchEnd = 0;
		var _self = this;
		this.mouseWheelAndKey = function (event) {

			//스크롤이 생겼을때 작동 안하게 추가
			var scrollPosition = window.scrollY || document.documentElement.scrollTop;
			if(scrollPosition <= 0){
				if (event.deltaY > 0 || event.keyCode == 40) {
					_self.defaults.currentPosition ++;
					_self.changeCurrentPosition(_self.defaults.currentPosition);
				} else if (event.deltaY < 0 || event.keyCode == 38) {
					_self.defaults.currentPosition --;
					_self.changeCurrentPosition(_self.defaults.currentPosition);
				}
			}
			_self.removeEvents();
		};

		this.touchStart = function (event) {
			mTouchStart = parseInt(event.changedTouches[0].clientY);
			mTouchEnd = 0;
		};

		this.touchEnd = function (event) {
			mTouchEnd = parseInt(event.changedTouches[0].clientY);
			if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
				if (mTouchEnd > mTouchStart) {
					_self.defaults.currentPosition --;
				} else {
					_self.defaults.currentPosition ++;
				}
				_self.changeCurrentPosition(_self.defaults.currentPosition);
			}
		};

		this.hashChange = function (event) {
			if (location) {
				var anchor = location.hash.replace('#', '').split('/')[0];
				if (anchor !== "") {
					if (anchor < 0) {
						_self.changeCurrentPosition(0);
					} else if (anchor > _self.defaults.maxPosition) {
						_self.changeCurrentPosition(_self.defaults.maxPosition);
					} else if (anchor >= 0 && anchor <= _self.defaults.maxPosition) {
						_self.defaults.currentPosition = anchor;
						_self.animateScroll();
					} else {
						//외부링크로 불러왔을 경우
						$("#wrap").addClass('scroll');
						$("#header").addClass('scroll');
						$("body").removeAttr('style');
						$('.btn_down').css('display','none');
						$('.centerDiv.ani').delay(700).animate({'opacity':'1','bottom':'0'},500);
						_self.defaults.currentPosition = _self.defaults.maxPosition;
						_self.animateScroll();
						$('.hira .section2 .bg .bg02').addClass('on')
						$(".row li:nth-child(1)").animate({'opacity':'1','top':'0'}, 200, 'swing');
						$(".row li:nth-child(2)").animate({'opacity':'1','top':'0'}, 400, 'swing');
						$(".row li:nth-child(3)").animate({'opacity':'1','top':'0'}, 600, 'swing');
						$(".row li:nth-child(4)").delay(200).animate({'opacity':'1','top':'0'}, 800, 'swing');
						$(".row li:nth-child(5)").delay(200).animate({'opacity':'1','top':'0'}, 1000, 'swing');
						$(".row li:nth-child(6)").delay(200).animate({'opacity':'1','top':'0'}, 1200, 'swing');
						$('.jone .section2 .centerDiv.ani .ci img').animate({'opacity':'1'},500);
						$('.jone .section2 .centerDiv.ani .title').delay(300).animate({'opacity':'1','bottom':'0'},500);
					}
				}
			}
		};

		this.removeEvents = function () {
			if (document.addEventListener) {
			document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.removeEventListener('wheel', this.mouseWheelAndKey, false);
			document.removeEventListener('keyup', this.mouseWheelAndKey, false);
			document.removeEventListener('touchstart', this.touchStart, false);
			document.removeEventListener('touchend', this.touchEnd, false);

			} else {
				document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
				document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
			}

			setTimeout(function(){
				_self.addEvents();
			}, 700);
		};

		this.animateScroll = function () {
			var animateTime = this.defaults.animateTime;
			var animateFunction = this.defaults.animateFunction;
			var position = this.defaults.currentPosition * 100;

			this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.transform = 'translateY(-' + position + '%)';
			this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;

			for (var i = 0; i < this.ul.childNodes.length; i++) {
				this.ul.childNodes[i].firstChild.classList.remove('active');
				if (i == this.defaults.currentPosition) {
					this.ul.childNodes[i].firstChild.classList.add('active');
				}
			}
		};

		this.changeCurrentPosition = function (position) {
			if (position !== "") {
				_self.defaults.currentPosition = position;
				location.hash = _self.defaults.currentPosition;

				//Class 추가
				if (position > 0) {
					$('#wrap').addClass('scroll');
					$('#header').addClass('scroll');
					$('#header').addClass('on');
				} else {
					$('#wrap').removeClass('scroll');
					$('#header').removeClass('scroll');
					$('#header').removeClass('on');
				}
				$("#main").attr('class','scroll-container sec-'+ position);
				if (position >= _self.defaults.maxPosition) {
					setTimeout(function(){
						$("body").removeAttr('style');
						$('.btn_down').css('display','none');
							if (pageName == "hongshot" ) {
								counter();
							}
					}, 700);
					$('.centerDiv.ani').delay(700).animate({'opacity':'1','bottom':'0'},300);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(1)').animate({'opacity':'1'},200);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(2)').delay(850).animate({'opacity':'1'},300);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(3)').delay(1000).animate({'opacity':'1'},300);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(4)').delay(1100).animate({'opacity':'1'},300);
					$('.jone .section2 .centerDiv.ani .title').delay(900).animate({'opacity':'1','bottom':'0'},500);
					setTimeout(function(){
						$(".ani .row_img").addClass('scale');
					},800)
					
				} else {
					$("body").css('overflow-y','hidden');
					$('.btn_down').css('display','block');
					$('.centerDiv.ani').animate({'opacity':'0','bottom':'-50px'},300);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(1)').animate({'opacity':'0'},200);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(2)').delay(400).animate({'opacity':'0'},200);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(3)').delay(600).animate({'opacity':'0'},200);
					$('.jone .section2 .centerDiv.ani .ci img:nth-child(4)').delay(800).animate({'opacity':'0'},200);
					$('.jone .section2 .centerDiv.ani .title').delay(1000).animate({'opacity':'0','bottom':'-50px'},200);
				}
			}
		};
		return this;
	};
	window.fullScroll = fullScroll;
})();