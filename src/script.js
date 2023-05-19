window.addEventListener("DOMContentLoaded", (event) => {
  $(document).ready(function () {
    let slideContainer = $('.slide-container');

    // Set the width of each slide dynamically based on the number of slides
    let slideWidth = 100 / $('.slide').length;
    $('.slide').css('width', slideWidth + '%');

    // Start the slideshow animation
    slideContainer.addClass('animate-slide');
  });

  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();
  $('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();


    let activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });



  let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,

    },
    breakpoints: {
      '1250': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '800': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '650': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
     

    }

  });

  let swiperr = new Swiper(".mySwiper1", {
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev ",
    },
    breakpoints: {
      '1250': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '800': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '650': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
     

    }

  });




  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 6
      }
    }
  })




  $(document).ready(function () {
    $('input[type="checkbox"]').change(function () {
      let checkboxIndex = $('input[type="checkbox"]').index(this);

      if ($(this).is(':checked')) {
        // Hide close image and show open image for current checkbox
        $(this).siblings('.w-full').find('.close-image').hide();
        $(this).siblings('.w-full').find('.open-image').show();

        // Hide open image and show close image for previous checkboxes
        for (let i = 0; i < checkboxIndex; i++) {
          let prevContent = $('input[type="checkbox"]').eq(i).siblings('.w-full');
          prevContent.find('.open-image').hide();
          prevContent.find('.close-image').show();
        }
      } else {
        // Hide open image and show close image for current checkbox
        $(this).siblings('.w-full').find('.open-image').hide();
        $(this).siblings('.w-full').find('.close-image').show();
      }
    });
  });




})

