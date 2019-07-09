(function($) {
$(function() {

	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.head-tab').find('div.box').eq($(this).index()).fadeIn(0).siblings('div.box').hide();
	})

})
})(jQuery)

$(document).ready(function(e) {
  $("header .up .city .link").click(function(){
	  $(this).parent().addClass("active");
	  $(".b-fix").addClass("act");
	  });  
  $("header .aut a.open").click(function(){
	  $(this).parent().addClass("active");
	  $(".b-fix").addClass("act");
	  });  
  $("header .login .but-login").click(function(){
	  $(this).parent().addClass("active");
	  });  
  $("header .login .close, .b-fix").click(function(){
	  $("header .login, header .up .city, header .aut").removeClass("active");
	  $(".b-fix").removeClass("act");
	  });
	 
	  
  $(".pop-over .close, .bg-close2").click(function(){
	  $(".pop-over, .bg-close, .bg-close2").css({"height" : "1px", "top" : "-999em"});
	  $("body").css({"overflow" : "auto"});
	  $(".pop-gallery").html("");
	  History.replaceState(null, null, "?");
	  });  

/*
$check_val = $(".checbox").attr("value");
$(".niceCheck").text($check_val);
*/


var max_h1 = 0,
$imag1 = $(".link-bg img"),
len1 = $imag1.length,
i1 = 0;
for (i1;i1<=len1;i1++) {
var h1 = $imag1.eq(i1).height();
if (h1>max_h1) {max_h1 = h1};
};
$imag1.parent().height(max_h1 + 28);	 



    $('body').on("click",".banner-a",function(){
        var id = $(this).data('id');
        console.log("ID",id);
        if(parseInt(id)>0){
            jQuery.post(pathClickBanner,{"ID":id,"AJAX_CLICK":"Y"},function(data){
                        console.log(data);      
            },"html");             
        }
    });

});





