
window.addEventListener("scroll", onScrollHandler)
function onScrollHandler(e) {
  var doc = document.getElementsByClassName('scrolling-navbar')[0];
  var backToTopElement = document.getElementsByClassName('back-to-top')[0]

  if (window.scrollY > 200) {
    doc.classList.add('top-nav-collapse')
    fadeInEffect(backToTopElement, 100)
  }
  else {
    doc.classList.remove('top-nav-collapse')
    backToTopElement.style.display = 'none'
    backToTopElement.style.opacity = 0
  }
}


function fadeInEffect(element, duration) {
  if (element.style.opacity == 0) {
    var op = 0.1;
    element.style.display = 'inline'
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      op += op + 0.001;
    }, duration);
  }

}

function fadeOutEffect(element, duration) {
  var fadeTarget = element;
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      fadeTarget.style.display = 'none'
    }
  }, duration);
}

document.getElementsByClassName('back-to-top')[0].addEventListener('load', (event) => {
  event.preventDefault();

  var fadeEffect = setInterval(function () {

    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop -= 100;
    } else {
      clearInterval(fadeEffect);
    }
  }, 10);

  return false;

});

function countdown() {
  var countDownDate = new Date("Mar 28, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
      document.getElementById("countdown-days").innerHTML = days;
      document.getElementById("countdown-hours").innerHTML = hours;
      document.getElementById("countdown-minutes").innerHTML = minutes;
      document.getElementById("countdown-seconds").innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
window.addEventListener('load', (event) => {
  fadeOutEffect(document.getElementById('preloader'), 50);
  countdown();
  $('.mobile-menu').slicknav({
    prependTo: '.navbar-header',
    parentTag: 'liner',
    allowParentLinks: true,
    duplicate: true,
    label: '',
  });

  var wow = new WOW({
    //disabled for mobile
    mobile: true
  });
  wow.init();


  // $('.lightbox').nivoLightbox({
  //   effect: 'fadeScale',
  //   keyboardNav: true,
  // });

  // one page navigation 
  $('.navbar-nav').onePageNav({
    currentClass: 'active'
  });
});
(function ($) {

  "use strict";

  $(window).on('load', function () {

    /* ==========================================================================
       countdown timer
       ========================================================================== */
    // jQuery('#clock').countdown('2018/06/21', function (event) {
    //   var $this = jQuery(this).html(event.strftime(''
    //     + '<div class="time-entry days"><span>%-D</span> Days</div> '
    //     + '<div class="time-entry hours"><span>%H</span> Hours</div> '
    //     + '<div class="time-entry minutes"><span>%M</span> Minutes</div> '
    //     + '<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    // });


  });

}(jQuery));