$(function() {
    var isMobile;
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        isMobile = true;
        // Mobile height fix
        $('.height-fix').each(function () {
            var h = $(this).height();
            $(this).height(h);
        });
    }
    //
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-button1-visible")
            }
            else
            {
                entry.target.classList.remove("reveal-button1-visible")
            }
        });
    });

    const hidden_Page2 = document.querySelectorAll('.reveal-button1');
    hidden_Page2.forEach((el)=>observer2.observe(el));


    // Sticky Nav on Mobile
    if (isMobile) {
        $('nav').addClass('fixed');
    } else {
        $('nav').addClass('desk');
    }
    // NAV POSITION
    var navPos = $('nav.overridden-nav').position().top;
    var lastPos = 0;

    $(window).on('scroll', function () {
        var pos = $(window).scrollTop();
        var pos2 = pos + 50;
        var scrollBottom = pos + $(window).height();
        if (!isMobile) {
            if (pos >= navPos + $('nav.overridden-nav').height() && lastPos < pos) {
                console.log("FIX");
                $('nav.overridden-nav').addClass('fixed');
            }
            if (pos < navPos && lastPos > pos) {
                console.log("Not fix");
                $('nav.overridden-nav').removeClass('fixed');
            }
            lastPos = pos;
        }

        // Link Highlighting



    });

    function highlightLink(anchor) {
        $('nav .active').removeClass('active');
        $('nav')
            .find('[dest="' + anchor + '"]')
            .addClass('active');
    }


});