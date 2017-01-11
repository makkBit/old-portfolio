$(function(){
    var windowH = $(window).height();
    var bannerH = $('#banner').height();
    if(windowH > bannerH) {                            
        $('#banner').css({'height':($(window).height() - 68)+'px'});
		$('#bannertext').css({'height':($(window).height() - 68)+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var bannerH = $('#banner').height();
        var differenceH = windowH - bannerH;
        var newH = bannerH + differenceH;
        var truecontentH = $('#bannertext').height();
        if(windowH < truecontentH) {
            $('#banner').css({'height': (newH - 68)+'px'});
			$('#bannertext').css({'height': (newH - 68)+'px'});
        }
		if(windowH > truecontentH) {
            $('#banner').css({'height': (newH - 68)+'px'});
			$('#bannertext').css({'height': (newH - 68)+'px'});
        }

    });         
});


$(function(){
  $('#galleryimg').mixItUp();
});