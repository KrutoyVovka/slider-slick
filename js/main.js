$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,						/* по умолчанию false*/
		//arrows: false,				/* по умолчанию true*/
		//autoplay: true,
		//infinite: false,
		//adaptiveHeight: true,		/* по умолчанию false*/
		//slidesToShow: 1,			/* по умолчанию 1*/
		//slidesToScroll: 1,			/* по умолчанию 1*/
		//speed: 1000,					/* по умолчанию 500*/
		//easing: 'ease',				/* по умолчанию 'linear'*/
		//infinite: false,			/* по умолчанию true*/
		//initialSlide: 0,			/* по умолчанию 0*/
		//autoplay: true,				/* по умолчанию false*/
		//autoplaySpeed: 1500,		/* по умолчанию 3000*/ /* + infinite: true */
		//pauseOnFocus: false,		/* по умолчанию true*/
		//pauseOnHover: false,		/* по умолчанию true*/
		//pauseOnDotsHover: false,	/* по умолчанию true*/
		//draggable: false,			/* по умолчанию true*/ /* управление мышью для ПК*/
		//swipe: false,				/* по умолчанию true*/ /* для touchScreen */ 
		//touchTreshold: 10, 		/* по умолчанию 5*/
		//touchMove: false,			/* по умолчанию true*/
		//waitForAnimate: false,	/* по умолчанию true*/
		//centerMode: true,			/* по умолчанию false*/
		//variableWidth: true,		/* по умолчанию false*/ /* + centerMode: true */
		//rows: 2,						/* по умолчанию 1*/
		//SlidesPerRow: 2,			/* по умолчанию 1*/
		//vertical: true,				/* по умолчанию false*/ /* указать height для слайда */
		//verticalSwiping: true,	/* по умолчанию false*/
		//fade: true,					/* по умолчанию false*/ /* ! slidesToShow:1 не перелистывает слайды */
		//asNavFor:".classname"		/* связывает два слайдера ! указать в обоих слайдерах */
		//accessibility: false,
		/* responsive: [{
			breakpoint: 768,
			settings: {}
		}], */
		//mobileFirst: true,	/* по умолчанию false*/
		//appendArrows: $('.div.class_name'),	/* перемещает стрелки в div.*/
		//appendDots: $('.div.class_name'),		/* перемещает точки в div.*/
	});

	// Ivents
	/* $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		console.log(nextSlide);
	}); */
	/* $('.slider').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);
	}); */

	// Methods
});