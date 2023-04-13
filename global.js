// hero section


// hero section


// Owl Carousal
$('#pagination-demo').twbsPagination({
  totalPages: 35,
  visiblePages: 4,
  onPageClick: function (event, page) {
    $('#page-content').text('Page ' + page);
  }
});

$("#owl-slider").owlCarousel({
  animateOut: 'fadeOut',
  items: 1,
  smartSpeed: 450,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1
    }
  }
});


$("#ex").owlCarousel({
  merge: true,
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2.5
    },
    960: {
      items: 3.5
    },
    1200: {
      items: 2.4
    }
  }
})

$("#carpenter").owlCarousel({
  merge: true,
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    960: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
})
$("#carpenterMumbai").owlCarousel({
  merge: true,
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    960: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
})


// our product categories starts here
var owl = $('.owl-carousel');
owl.owlCarousel({
  merge: true,
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    960: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});

$(document).ready(function () {
  var carousel = $("#owl-demo");
  carousel.owlCarousel({
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  });
});

// testimonial js starts here
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// testimonial js ends here


// mega menu starts
document.addEventListener('click', function (e) {
  // Hamburger menu
  if (e.target.classList.contains('hamburger-toggle')) {
    e.target.children[0].classList.toggle('active');
  }
})
// mega menu ends

// swiper slider starts
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
// swiper slider ends
$(document).ready(function () {
  $('#myModal').modal('show');
});

//  move to top

//  move to top

// lightbox

  // lightbox