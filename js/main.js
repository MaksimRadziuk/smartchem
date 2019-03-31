$(document).ready(function() {

/*SLOWSCROLL*/
    $('#toAdvan').click(function(){
        $('body, html').animate({scrollTop:$('#advan').position().top}, 200);
    });
    $('#toCatalog').click(function(){
        $('body, html').animate({scrollTop:$('#catalog').position().top}, 300);
    });
    $('#toCertif').click(function(){
        $('body, html').animate({scrollTop:$('#certif').position().top}, 400);
    });
    $('#toContact').click(function(){
        $('body, html').animate({scrollTop:$('#contact').position().top}, 500);
    });
    $('#toTop').click(function(){
        $('body, html').animate({scrollTop:$('#top').position().top}, 500);
    });

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
        // when window width is <= 900px
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
