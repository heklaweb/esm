import $ from 'jquery';

// Weitgehend übernommen von LearnWebCode (https://www.youtube.com/watch?v=Nx0aYVwhwqQ)
$(document).ready( function() {
    var remainingHeight = 0;

    function calcRemainingHeight() {
        // console.log("Höhe für Header: " + $(".site-header").outerHeight());
        // console.log("Höhe für Footer: " + $(".site-footer").outerHeight());
        remainingHeight = $(window).height()
            - $(".site-header").outerHeight()
            - $(".site-footer").outerHeight();
        // console.log("Verbleibende Höhe für Content: " + remainingHeight);
    }

    function setContentHeight() {
        calcRemainingHeight();
        $(".site-content").height(remainingHeight);
    }

    // On page load
    setContentHeight();

    // On window resize
    $(window).resize(function() {
        setContentHeight();
    });
});