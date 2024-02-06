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
    // Animation button

    observeVisibility("about-title-animation", "about-title-animation-reveal");
    observeVisibility("about-text-animation", "about-text-animation-reveal");
    observeVisibility("about-img-animation", "about-img-animation-reveal");

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
        if (pos2 > $('#home').offset().top) {
            highlightLink('home');
        }
        if (pos2 > $('#about').offset().top) {
            highlightLink('about');
        }

        if (
            pos2 > $('#contact').offset().top ||
            pos + $(window).height() === $(document).height()
        ) {
            highlightLink('contact');
        }

    });

    function highlightLink(anchor) {
        $('nav .active').removeClass('active');
        $('nav')
            .find('[dest="' + anchor + '"]')
            .addClass('active');
    }
    function observeVisibility(classNameToObserve, classNameToAddOrRemove) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add(classNameToAddOrRemove);
                } else {
                    entry.target.classList.remove(classNameToAddOrRemove);
                }
            });
        });

        const elements = document.querySelectorAll('.' + classNameToObserve);
        elements.forEach((el) => observer.observe(el));
    }
});