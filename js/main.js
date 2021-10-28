$(document).ready(function() {
    $("#navbar-toggle").click(function() {
        $("#responsive-menu").stop();
        $("#responsive-menu").slideToggle();
    });

    function hide_responsive_menu() {
        $("#responsive-menu").stop();
        $("#responsive-menu").slideUp();
        $("#responsive-menu .sub-menu").slideUp();
        $(".responsive-menu-toggle").removeClass("open");
    }
    $(window).resize(function() {
        hide_responsive_menu();
    });

    $(window).scroll(function() {
        hide_responsive_menu();
    });
    //Show hidden sub-menu responsive
    $(".responsive-menu-toggle").click(function() {
        $(this).toggleClass("open");
        $(this).next(".sub-menu").slideToggle();
    });
    $("#search-toggle").click(function() {
        $("#search-dathietbi").stop();
        $("#search-dathietbi").slideToggle();
    });

    function hide_search() {
        $("#search-dathietbi").stop();
        $("#search-dathietbi").slideUp();
        // $(".responsive-menu-toggle").removeClass("open");
    }
    $(window).resize(function() {
        hide_search();
    });

    $(window).scroll(function() {
        hide_search();
    });
    //Show hidden sub-menu responsive
    // $("#search-toggle").click(function() {
    //     $(this).toggleClass("open");
    //     $(this).next(".sub-menu").slideToggle();
    // });
});