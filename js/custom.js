$(document).ready(function () {
    $(".menu ul").on("click", function () {
        $(this).toggleClass("active");
    });

    $(".news-filter button").on("click", function (e) {
        e.preventDefault();
        $(".news-filter button").removeClass("all-active active");
        $(this).addClass("active");
        var tag = $(this).attr("data-tag");
        var newsItem = $(".news-container .news-article");
        console.log(tag);
        newsItem.removeClass("active");
        newsItem.each(function () {
            if ($(this).hasClass(tag)) {
                $(this).addClass("active")
            }
        });
        $(".news-container .col-3").addClass("full-width");
    })
});