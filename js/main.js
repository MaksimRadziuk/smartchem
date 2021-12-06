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
    $('#toPre').click(function(){
        $('#toFoam, #toBefore').removeClass('active');
        $('#foam, #before').removeClass('active');
        $(this).addClass('active');
        $('#pre').addClass('active');
    });
    $('#toBefore').click(function(){
        $('#toFoam, #toPre').removeClass('active');
        $('#foam, #pre').removeClass('active');
        $(this).addClass('active');
        $('#before').addClass('active');
    });
    $('#toFoam').click(function(){
        $('#toPre, #toBefore').removeClass('active');
        $('#pre, #before').removeClass('active');
        $(this).addClass('active');
        $('#foam').addClass('active');
    });
    $('#toJod').click(function(){
        $('#toBlue, #toGreen').removeClass('active');
        $('#blue, #green').removeClass('active');
        $(this).addClass('active');
        $('#jod').addClass('active');
    });
    $('#toBlue').click(function(){
        $('#toGreen, #toJod').removeClass('active');
        $('#jod, #green').removeClass('active');
        $(this).addClass('active');
        $('#blue').addClass('active');
    });
    $('#toGreen').click(function(){
        $('#toBlue, #toJod').removeClass('active');
        $('#blue, #jod').removeClass('active');
        $(this).addClass('active');
        $('#green').addClass('active');
    });

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        // when window width is <= 900px
        900: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        }
      }
    })

});
