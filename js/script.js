/* Slick */
window.onload = function () {
    $(".main-sli").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  
    $(".main-sli button").remove();
  };
/* End of SLick */
  
/* Counter */
  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: "",
      },
      options
    );
  
    var thisElement = $(this);
  
    $({ count: settings.start }).animate(
      { count: settings.end },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete,
      }
    );
  };
  
  $("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
  $("#number2").jQuerySimpleCounter({ end: 35, duration: 3000 });
  $("#number3").jQuerySimpleCounter({ end: 36, duration: 2000 });
  $("#number4").jQuerySimpleCounter({ end: 145, duration: 2500 });
  
  /* AUTHOR LINK */
  $(".about-me-img").hover(
    function () {
      $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
    },
    function () {
      $(".authorWindowWrapper")
        .stop()
        .fadeOut("fast")
        .find("p")
        .removeClass("trans");
    }
  );
/* End of Counter */
  