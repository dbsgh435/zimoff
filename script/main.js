$(function() {
    $(".search-day").click(function() {
        $(".modal").animate({
            opacity: 1,
            "z-index" : 10
        },0)
    })
    $(".day-footer>button").click(function() {
        $(".modal").animate({
            opacity: 0,
            "z-index" : "-1"
        },0)
    })
})