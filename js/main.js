(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
    });
    
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
    
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    var blogIsotope = $('#blog .row').isotope({
        itemSelector: '.col-lg-4',
        layoutMode: 'masonry'
    });
    
    $('#blog-flters li').on('click', function() {
        $('#blog-flters li').removeClass('active');
        $(this).addClass('active');
    
        blogIsotope.isotope({ filter: $(this).data('filter') });
    });


    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

const observer = lozad('.lozad', {
    rootMargin: '50px 0px', // Apply a 50px margin to the viewport
    threshold: 0.1 // Load elements when they are 10% visible
  });
  
  observer.observe();

// window.onload = function() {
//     var img = document.createElement('img');
//     img.src = 'path/to/image.jpg';
//     img.onload = function() {
//       document.getElementById('myDiv').appendChild(img);
//       img.style.display = 'block';
//     }
// }
  


window.addEventListener('load', function() {
    const skeletons = document.querySelectorAll('.skeleton');

    skeletons.forEach(skeleton => {
        skeleton.addEventListener('load', function() {
            skeleton.classList.remove('skeleton');
        });
    });

    const skeletonTexts = document.querySelectorAll('.skeleton-text');

    skeletonTexts.forEach(skeletonText => {
        skeletonText.addEventListener('load', function() {
            skeletonText.classList.remove('skeleton-text');
        });
    });
});




function updateExperience() {
    // Set the desired date (May 2023 in this case)
    var desiredDate = new Date(2023, 4, 1); // Note: Months are zero-based, so May is represented by 4
  
    // Get the current date
    var currentDate = new Date();
  
    // Check if it's the 1st day of the month
    if (currentDate.getDate() === 1) {
      // Calculate the difference in months
      var monthsDiff = (currentDate.getFullYear() - desiredDate.getFullYear()) * 12;
      monthsDiff += currentDate.getMonth() - desiredDate.getMonth();
  
      // Update the experience value in the HTML
      var experienceValueElement = document.getElementById("experienceValue");
      experienceValueElement.textContent = monthsDiff + " Months";
    }
  }
  
  // Call the function initially to set the experience value
  updateExperience();
  
  // Call the function periodically to check if it's the 1st day of the month and update the experience value
  setInterval(updateExperience, 24 * 60 * 60 * 1000); // Check every 24 hours (1 day)
  