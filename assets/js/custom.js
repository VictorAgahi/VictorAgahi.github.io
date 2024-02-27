(function($){

    "use strict";

    $('a[href*=#]').on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $("#scroll-up").click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });


    $('.header').sticky({
        topSpacing: 0
    });

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 70
    })


    $(".js-height-full").height($(window).height());

    $(window).resize(function(){
        $(".js-height-full").height($(window).height());
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({'background-attachment': 'scroll'});
    } else {
        $('#home').parallax('50%', 0.1);
    }
    var $portfolioContainer = $('.list-items-container');

    $('#filter li').on('click', function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        $(this).addClass('active');


        var groupName = $(this).attr('data-group');

        $portfolioContainer.shuffle('shuffle', groupName );
    });


    $( document ).ready(function() {
        new WOW().init();
    });

    new TypeIt('#pres', {
        strings: ["My name is Victor, I'm a Dorset Engineerr"],
        speed: 50,
        loop:true,
        loopDelay:10000,
        waitUntilVisible: true
    }).go();

    $(document).ready(function() {
        $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
        )
    });




})(jQuery);