
$(function(){
	// $('.slide-main').slides({
	// 	preload: false,
	// 	play: 5000,
	// 	pause: 2500,
	// 	hoverPause: true
	// });
});

// $(function() {
// 	$('#foo4').carouFredSel({
// 		width: 890,
// 		scroll: 2,
// 		prev: '#prev3',
// 		next: '#next3',
// 		items: {
// 			visible: {
// 				min: 6,
// 				max: 6
// 			}
// 		}
// 	});
// });


$(document).ready(function(){
	var a = $("body");
	$(".e-switcher_btn").on("click", function() {
		var b = $(this).parent().find(".e-switcher_item.m-first").attr("id"),
			c = $(this).parent().find(".e-switcher_item.m-last").attr("id");
		$(this).parent().find(".m-last").hasClass("m-active") ? ($(this).parent().find(".e-switcher_item").toggleClass("m-active"), $(this).parent().find(".e-switcher_item.m-first").addClass("m-active"), $(this).find("b").animate({
			left: 0
		}, 200), a.find("." + b).fadeIn(), a.find("." + c).hide()) : ($(this).parent().find(".e-switcher_item").removeClass("m-active"), $(this).parent().find(".e-switcher_item.m-last").addClass("m-active"), $(this).find("b").animate({
			left: 12
		}, 200), a.find("." + b).hide(), a.find("." + c).fadeIn())
	}), $(".e-switcher_item.m-first").on("click", function() {
		$(this).parent().find(".e-switcher_item").removeClass("m-active"), $(this).addClass("m-active"), $(this).parent().find("b").animate({
			left: 0
		}, 200);
		var b = $(this).attr("id"),
			c = $(this).parent().find(".e-switcher_item.m-last").attr("id");
		a.find("." + b).show(), a.find("." + c).hide()
	}), $(".e-switcher_item.m-last").on("click", function() {
		$(this).parent().find(".e-switcher_item").removeClass("m-active"), $(this).addClass("m-active"), $(this).parent().find("b").animate({
			left: 12
		}, 200);
		var b = $(this).attr("id"),
			c = $(this).parent().find(".e-switcher_item.m-first").attr("id");
		a.find("." + b).show(), a.find("." + c).hide()
	})
	$(".e-slide_link.m-top").on("click", function() {
		$(".m-west .b-score_table_top:visible").length ? $(this).parent().find(".b-score_table_bottom").slideToggle() : $(".m-west .b-score_table_top").slideDown()
	})
	$(".e-slide_link.m-bottom").on("click", function() {
		$(".m-west .b-score_table_top:visible").length ? $(this).parent().find(".b-score_table_bottom").slideToggle() : $(".m-west .b-score_table_top").slideDown()
	})
});

$(function(){
	if ($("#coundown-timer").length){
		if (+new Date($("#coundown-timer").data("date")) <= +new Date())
			return

		var clock = $('#coundown-timer').FlipClock({
			clockFace: 'DailyCounter',
			autoStart: false,
			language: "russian"
		});

		clock.setTime((+new Date($("#coundown-timer").data("date")) - +new Date) / 1000);

		clock.setCountdown(true);

		clock.start();
	}
});