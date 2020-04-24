$(() => {

	$(".tabs-tab").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs");

		$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".tabs-content[data-id='"+id+"']").addClass("active");
	});

	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: $(".main-slider__slide").length > 1,
		slide: '.main-slider__slide',
		autoplay: true,
		autoplaySpeed: 5000,
	})

	var setArrow = $('.slider-game > .sprev, .slider-game > .snext').clone();

	$('.slider-game .caroufredsel_wrapper').prepend(setArrow);

	$(window).on('load', function(){

		$(".fancybox").fancybox({
			trapFocus: false,
			touch: false,
			buttons: ["fullscreen", "slideShow", "close"],
			image: {
				preload: true,
			},
			transitionEffect: "slide",
		});

		$("header .slider-game .list-parts").slick({
			slidesToShow: 8,
			slidesToScroll: 1,
			slide: "li",
			//appendArrows: $(".kart__slider-arrows"),
		});
		$(".footer-slider .list-parts").slick({
			slidesToShow: 8,
			slidesToScroll: 1,
			slide: "li",
			//appendArrows: $(".kart__slider-arrows"),
		});

		$(".slider-part .list-part").slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			slide: "li",
			//appendArrows: $(".kart__slider-arrows"),
		});

		$(".slides_container").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: ".slide-news",
		});

		$(".shop-block__list").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: ".shop-block__item",
			appendArrows: $(".shop-block__arrow"),

		});
	})


    // $('.forms__input--select').each(function(i,el){
    //     let $select = $(el);

    //     $select.selectize({
    //         placeholder: $select.attr("placeholder"),
    //         maxItems: 1,

    //     })


    // })



	$(".b-tags .title2").click(function(){
		$(this).toggleClass("js__opened").next(".b-tags__list").slideToggle(300)
	})




})

$(window).on('load', function(){


	if($('#soc-popup').length){

		$.fancybox.open({
			src  : '#soc-popup',
			afterClose: function(){
				Cookies.set("soc-popup", 1, { expires: 1 });
			}
		});


	}

})

$(window).on("load scroll resize", e => {

	if ($(window).scrollTop() >= 280){

		$("body").addClass("js__scroll");

		setTimeout(e => {
			$(".main-logo").addClass("js__show")
		}, 500);

	}else{
		$(".main-logo").removeClass("js__show");
		$("body").removeClass("js__scroll");
	}

});

