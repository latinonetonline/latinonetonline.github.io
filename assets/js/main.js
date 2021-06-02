
// window.addEventListener("scroll", onScrollHandler)
// function onScrollHandler(e) {
//   var doc = document.getElementsByClassName('scrolling-navbar')[0];
//   var backToTopElement = document.getElementsByClassName('back-to-top')[0]

//   if (window.scrollY > 200) {
//     doc.classList.add('top-nav-collapse')
//     fadeInEffect(backToTopElement, 100)
//   }
//   else {
//     doc.classList.remove('top-nav-collapse')
//     backToTopElement.style.display = 'none'
//     backToTopElement.style.opacity = 0
//   }
// }


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

// document.getElementsByClassName('back-to-top')[0].addEventListener('load', (event) => {
//   event.preventDefault();

//   var fadeEffect = setInterval(function () {

//     if (document.documentElement.scrollTop > 0) {
//       document.documentElement.scrollTop -= 100;
//     } else {
//       clearInterval(fadeEffect);
//     }
//   }, 10);

//   return false;

// });


 window.addEventListener('load', (event) => {
//   fadeOutEffect(document.getElementById('preloader'), 50);

  $('.mobile-menu').slicknav({
    prependTo: '.navbar-header',
    parentTag: 'liner',
    allowParentLinks: true,
    duplicate: true,
    label: '',
  });

  var wow = new WOW({
    //disabled for mobile
    mobile: false
  });
  wow.init();

  $('.navbar-nav').onePageNav({
    currentClass: 'active'
  });
 });