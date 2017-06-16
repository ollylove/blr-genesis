$(document).ready(function () {
    $(".menu > ul").on("click", function () {
        $(this).toggleClass("active");
    });

    $(".menu .search img").on("click", function () {
        $(".menu .search").addClass("active");
        $(".menu > ul").addClass("hide");
    });

    $(".menu .search .close").on("click", function (e) {
        e.stopPropagation();
        $(".menu .search").removeClass("active");
        $(".menu > ul").removeClass("hide");
    });

    if ($(window).width() < 1200) {
        $(".menu .search").on("click", function (e) {
            e.stopPropagation();
            $(this).addClass("active");
        });
    }

    /*$(".news-filter button").on("click", function (e) {
        e.preventDefault();
        var filterValue = $( this ).attr('data-tag');

        if ($(this).hasClass("all-active")) {
            $(".news-filter button").removeClass("all-active active");
            $(this).addClass("active");
            $grid.isotope({ filter: filterValue });
        }
        else if ($(this).hasClass("active")) {
            $(".news-filter button").removeClass("active").addClass("all-active");
            $grid.isotope({ filter: '*' });
        }
        else {
            $(".news-filter button").removeClass("active");
            $(this).addClass("active");
            $grid.isotope({ filter: filterValue });
        }
    });

    var $grid = $('.news-container').isotope({
        itemSelector: '.news-article',
        layoutMode: 'masonry'
    });*/

    $(".resources-faq-navigation ul li a").on("click", function () {
        $(this).parents("ul").find(".active").removeClass("active");
        $(this).addClass("active");

        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $(".resources-faq-questions h6").on("click", function () {
        $(this).parent().find(".active").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });

    /*$('.resources-faq-navigation').Stickyfill();*/
});