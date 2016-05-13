$(function() {

    var navTop = $('<div id="floatingbar"></div>').offset().top;
    console.log(navTop);

    $(window).scroll(function() {
        if ($(window).scrollTop() > navTop) {
            $('#floatingbar').addClass('floater');
            /* STEP 6c - sticky footer button appear */
            $('footer a.top').fadeIn(150);
        } else {
            // remove the class
            $('#floatingbar').removeClass('floater');
            /* STEP 6d - sticky footer button dissappear */
            $('footer a.top').fadeOut(150);
        }
    });



    $('footer a.top').click(function(event) {
        /* stop default anchor behavior */
        event.preventDafault();
        $('body').animate({scrollTop: 0}, 400);
    });

    $('span.pullquote').each(function() {
        var parentElem = $(this).parent('p');

        $(this).clone().addClass('pullquote2').prependTo(parentElem);
    });
});
