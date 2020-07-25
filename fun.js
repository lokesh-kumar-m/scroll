$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
$(window).scroll(function(){
  var scrl=$(this).scrollTop();
  if(scrl > $('.one').offset().top - $(window).height()){
    var offset = (Math.min(0, scrl - $('.one').offset().top +$(window).height() - 350)).toFixed();
    $('.one').css({'transform': 'translate(-'+ Math.abs(offset) +'px)'});
    $('.two').css({'transform': 'translate('+ Math.abs(offset) +'px)'});
  }

   if(scrl>$('.blurb').offset().top-$(window).height()+($('.blurb').outerHeight(true)/3) && scrl<$('.blurb').offset().top + $('.blurb').outerHeight(true)-($(window).height())/1.3){
     $('.blurb').css({'opacity':'1'})
   }
     else{
     $('.blurb').css({'opacity': '0'})
     console.log('hii')
   }
})
