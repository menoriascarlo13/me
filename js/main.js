function animateIn() {
    $(".content-skill").each(function (index, element) {
        $(element).css('opacity', '1')
    });
}

function yearReturn() {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    return year;
}
