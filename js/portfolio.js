$(document).ready(function() {
    function updateHeight () {
        $('.slide').height(function(){
            return $(window).height();
        });
    }
 
    updateHeight();
    $(window).resize(updateHeight);
 
    setTimeout(function() {
        $('#main').waypoint(function() {
            $('body').toggleClass('show-nav');
        });
    }, 50);
 
    $('nav a').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        $(id).animatescroll();
    });
});