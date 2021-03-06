jQuery(document).ready(function(){

   jQuery(".slider").slick({
    dots: true,
    customPaging: function(slider, i) {
      return '<a class="slide-title" href="javascript:;">' + $(slider.$slides[i]).find('.sliderHdline').html() + '</a>';
    },
    arrows: false,
    autoplay: false,
    asNavFor: ".postSlider",
    adaptiveHeight: true
  });

   jQuery(".postSlider").slick({
    dots: false,
    arrows: false,
    autoplay: false,
    asNavFor: ".slider",
    adaptiveHeight: true
  });
  jQuery('.case').slick({  dots: false,  infinite: false, speed: 300,  slidesToShow: 3,  slidesToScroll: 3,
    responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  (function($){
    $(window).load(function(){
      $(".content").mCustomScrollbar();
    });
  })(jQuery);
  jQuery(".slider, .postSlider, .showcase-article,.homePromo").addClass("tricky");
});
