/*Timeline*/
jQuery(document).ready(function($){
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame)
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
});

/*Open/Close-modals*/
$(document).ready(function() {

        /*ORDER-MODAL*/
                /* MAIN-MODAL */
            $('#close-main-modal').click(function() {
                $('#modal-order-main').fadeOut(1000);
            })
            $('#close-main-thx-modal').click(function() {
                $('#thanks-order-main').fadeOut(1000);
            })
            $('#modal-main').click(function() {
                $('#modal-order-main').fadeIn(1500);
            })

                /*PRESENT-MODAL*/
            $('#present-close').click(function() {
                $('#thanks-order-present').fadeOut(1000);
            })

                /*SIZE'S-MODAL*/
            $('#price-btn1').click(function() {
                $('#modal-order-size1').fadeIn(1500);
            })
            $('#close-size1-thx-modal').click(function() {
                $('#thanks-order-size1').fadeOut(1000);
            })
            $('#close-size1-modal').click(function() {
                $('#modal-order-size1').fadeOut(1000);
            })


            $('#price-btn2').click(function() {
                $('#modal-order-size2').fadeIn(1500);
            })
            $('#close-size2-thx-modal').click(function() {
                $('#thanks-order-size2').fadeOut(1000);
            })
            $('#close-size2-modal').click(function() {
                $('#modal-order-size2').fadeOut(1000);
            })


            $('#price-btn3').click(function() {
                $('#modal-order-size3').fadeIn(1500);
            })
            $('#close-size3-thx-modal').click(function() {
                $('#thanks-order-size3').fadeOut(1000);
            })
            $('#close-size3-modal').click(function() {
                $('#modal-order-size3').fadeOut(1000);
            })

                /*MOMENTS-MODAL*/
            $('#moments-close').click(function() {
                $('#thanks-order-moments').fadeOut(1000);
            })

        /*RE_CALL-MODAL*/
                /*NAV-BAR-MODAL*/
            $('#nav-re_call').click(function() {
                $('#modal-re_call-navbar').fadeIn(1500);
            })
            $('#close-navbar-call').click(function() {
                $('#modal-re_call-navbar').fadeOut(1000);
            })
            $('#close-thx-nav').click(function() {
                $('#thanks-re_call-navbar').fadeOut(1000);
            })

                /*CERTIFICATE-MODAL*/
            $('#certificate-modal').click(function() {
                $('#modal-re_call-certificate').fadeIn(1500);
            })
            $('#close-certificate-call').click(function() {
                $('#modal-re_call-certificate').fadeOut(1000);
            })
            $('#close-thx-certificate').click(function() {
                $('#thanks-re_call-certificate').fadeOut(1000);
            })

                /*CONTACT-MODAL*/
            $('#contact-re_call').click(function() {
                $('#modal-re_call-contact').fadeIn(1500);
            })
            $('#close-contact-call').click(function() {
                $('#modal-re_call-contact').fadeOut(1000);
            })
            $('#close-thx-contact').click(function() {
                $('#thanks-re_call-contact').fadeOut(1000);
            })

                /*FOOTER-MODAL*/
            $('#footer-re_call').click(function() {
                $('#modal-re_call-footer').fadeIn(1500);
            })
            $('#close-footer-call').click(function() {
                $('#modal-re_call-footer').fadeOut(1000);
            })
            $('#close-thx-footer').click(function() {
                $('#thanks-re_call-footer').fadeOut(1000);
            })

})
/*Link-slow*/
$(document).ready(function() {
    linkInterno = $('a[href^="#main"]');
    linkInterno.on('click',function(e) {
                    e.preventDefault();
                    var href = $(this).attr('href');
                    $('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow');
                    });

})

/*Main-slider*/
$(document).ready(function() {
    $('#indicator1').addClass('active');
   $('#indicator1').click(function() {
        $('#indicator1').addClass('active');
        $('#indicator3').removeClass('active');
        $('#indicator2').removeClass('active');
        $('header#main').css({"background": "url('images/main-bg.png') no-repeat center center", "background-size": "cover", "transition": "background, .5s"});

   })
   $('#indicator2').click(function() {
        $('#indicator2').addClass('active');
        $('#indicator1').removeClass('active');
        $('#indicator3').removeClass('active');
        $('header#main').css({"background": "url('images/moments/moments-bg.png') no-repeat center center", "background-size": "cover", "transition": "background, .5s"});

   })
   $('#indicator3').click(function() {
        $('#indicator3').addClass('active');
        $('#indicator2').removeClass('active');
        $('#indicator1').removeClass('active');
        $('header#main').css({"background": "url('images/present/present-bg.png') no-repeat center center", "background-size": "cover", "transition": "background, .5s"});
   })
})
