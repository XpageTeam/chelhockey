'use strict';

$(function () {

	var setArrow = $('.slider-game > .sprev, .slider-game > .snext').clone();

	$('.slider-game .caroufredsel_wrapper').prepend(setArrow);

	$(window).on('load', function () {
		$("header .slider-game .list-parts").slick({
			slidesToShow: 8,
			slidesToScroll: 1,
			slide: "li"
			//appendArrows: $(".kart__slider-arrows"),
		});

		$(".slider-part .list-part").slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			slide: "li"
			//appendArrows: $(".kart__slider-arrows"),
		});

		$(".slides_container").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: ".slide-news"
		});

		$(".shop-block__list").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: ".shop-block__item",
			appendArrows: $(".shop-block__arrow")

		});
	});
});
//# sourceMappingURL=common.js.map
