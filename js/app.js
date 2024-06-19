// initialize foundation
$(document).foundation();

// initalize fullpage.js
$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    anchors:['gallery', 'menu', 'info'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 1400,
    autoScrolling: false,
    fitToSection: false,
    scrollBar: true,

    //Design
    controlArrows: false,
  });
});

// auto-scroll slides
var intervalID = window.setInterval(moveSlide, 4000);
var slideDirection = "right";

function moveSlide() {
  if ($( "#slide9" ).hasClass( "active" )) {
    slideDirection = "left";
  } else if ($( "#slide0" ).hasClass( "active" )) {
    slideDirection = "right";
  };

  if (slideDirection == "right") {
    $.fn.fullpage.moveSlideRight();
  } else if (slideDirection == "left") {
    $.fn.fullpage.moveSlideLeft();
  };
};