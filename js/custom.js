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

    $(".news-filter button").on("click", function (e) {
        e.preventDefault();
        var tag = $(this).attr("data-tag");
        var newsItem = $(".news-container .news-article");

        if ($(this).hasClass("all-active")) {
            $(".news-filter button").removeClass("all-active active");
            $(this).addClass("active");
            newsItem.removeClass("active");
            newsItem.each(function () {
                if ($(this).hasClass(tag)) {
                    $(this).toggleClass("active")
                }
            });
            $(".news-container .col-3").addClass("full-width");
        }
        else if ($(this).hasClass("active")) {
            $(".news-filter button").removeClass("active").addClass("all-active");
            newsItem.addClass("active");
            $(".news-container .col-3").removeClass("full-width");
        }
        else {
            $(".news-filter button").removeClass("active");
            $(this).addClass("active");
            newsItem.removeClass("active");
            newsItem.each(function () {
                if ($(this).hasClass(tag)) {
                    $(this).toggleClass("active")
                }
            });
            $(".news-container .col-3").addClass("full-width");
        }
    })
});