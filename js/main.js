var typed = new Typed(".feature-text", {
  // Waits 1000ms after typing "First"
  strings: ["society", "environment", "India"],
  typeSpeed: 20,
  backSpeed: 20,
  backDelay: 2000,
  loop: true,
  autoInsertCss: true
});


$('.back-image').maximage({
  cycleOptions: {
    timeout: 2000,
    speed: 500
  }
});

var height = $(window).height();
var width = $(window).width();
window.addEventListener('resize', setWindowSize);

function setWindowSize() {
    if($(this).height() != height || $(this).width() != width){
        height = $(this).height();
        width = $(this).width();
    }

    if ((height <= 650  && width >1000) || height < 700 ) {
      $(".main-container").css({"height": "90%"});
    }else{
      $(".main-container").css({"height": "80vh"});
      console.log("1");

    }
}
