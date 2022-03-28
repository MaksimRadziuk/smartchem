$(document).ready(function() {

/*SLOWSCROLL*/
    $(function(){
      $.fn.scrollToTop=function(){
        $(this).hide().removeAttr("href");
        if($(window).scrollTop()!="0"){
            $(this).fadeIn("slow")
      }
      var scrollDiv=$(this);
      $(window).scroll(function(){
        if($(window).scrollTop()<="500"){
        $(scrollDiv).fadeOut("slow")
        }else{
        $(scrollDiv).fadeIn("slow")
      }
      });
        $(this).click(function(){
          $("html, body").animate({scrollTop:0},"slow")
        })

      }
    });
    $(function() {$(".topbtn").scrollToTop();});

/*PRODUCT'S TABS*/
    $('.catalog__tab-trigger').click(function(){
      $('.catalog__tab-trigger').removeClass('active');
      $(this).addClass('active');
    });

/*HISTORY BLOCKS*/

    $( ".history_block" ).hover(function() {
      $( ".history_block" ).removeClass('active');
      $(this).addClass('active');
      let positionTop = $(this).offset().top;
      let blockHeight = $(this).height();
      $( '.history_mark' ).css("top", positionTop - blockHeight + 67);
    });

});

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 1000);
    return false;
    }
