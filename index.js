$(document).ready(function() {
    let offset = 1,
        slideCount = $("#slidewrapper").children().length;

    $($(".nav-btn")[0]).addClass("active");

    function next() {
        if (offset <= 0 || offset >= slideCount) {
            $($(".nav-btn")).removeClass("active");
            $($(".nav-btn")[0]).addClass("active");

            $("#slidewrapper").css({
                "transform": "translate(0, 0)",
            });


            offset = 1;
        } else {
            translateWidth = -$("#viewport").width() * (offset);

            $("#slidewrapper").css({
                "transform": 'translate(' + translateWidth + 'px, 0)',
            });

            offset++;

            $($(".nav-btn")).removeClass("active");

            $($(".nav-btn")[offset - 2]).removeClass("active");
            $($(".nav-btn")[offset - 1]).addClass("active");
        };
    };

    function prev() {
        if (offset <= 1) {
            translateWidth = -$('#viewport').width() * (slideCount - 1);

            $($(".nav-btn")[0]).removeClass("active");
            $($(".nav-btn")[slideCount - 2]).addClass("active");

            $("#slidewrapper").css({
                "transform": 'translate(' + translateWidth + 'px, 0)',
            });

            offset = slideCount;
        } else {
            translateWidth = -$("#viewport").width() * (offset - 2);

            $("#slidewrapper").css({
                "transform": 'translate(' + translateWidth + 'px, 0)',
            });

            offset--;

            $($(".nav-btn")[offset]).removeClass("active");
            $($(".nav-btn")[offset - 1]).addClass("active");
        };
    };

    $(".nav-btn").click(function() {
        let navBtnId = $(this).index();

        $(".nav-btn").removeClass("active");
        $(this).addClass("active");

        if (navBtnId + 1 != offset) {
            translateWidth = -$("#viewport").width() * (navBtnId);

            $("#slidewrapper").css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });

            offset = navBtnId + 1;
        };
    });

    $(".next-btn").click(next);
    $(".prev-btn").click(prev);
});