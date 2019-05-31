var $window = $(window);
var $elem = $(".animation")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function() {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
    }
});

function menu() {

    // Add Class to make element active, we will reset it first
    jQuery("#main-navigation ul li").removeClass("menu-item-active");
    jQuery(this).parent().addClass("menu-item-active");
    jQuery(".hero-row").addClass("main-menu-active");

    mega_menu = jQuery(".expanded-navigation");
    // Show Wrapper
    jQuery(mega_menu).addClass("active");
}

function education_menu() {
    // Reset
    jQuery("ul#network-navigation").removeClass("active");
    jQuery("ul#counsel-navigation").removeClass("active");
    jQuery("ul#research-navigation").removeClass("active");
    mega_menu.removeClass("network");
    mega_menu.removeClass("counsel");
    mega_menu.removeClass("research");

    // Add
    mega_menu.addClass("education");
    jQuery("ul#education-navigation").addClass("active");
}

function network_menu() {
    // Reset
    jQuery("ul#education-navigation").removeClass("active");
    jQuery("ul#counsel-navigation").removeClass("active");
    jQuery("ul#research-navigation").removeClass("active");
    mega_menu.removeClass("education");
    mega_menu.removeClass("counsel");
    mega_menu.removeClass("research");

    // Add
    mega_menu.addClass("network");
    jQuery("ul#network-navigation").addClass("active");
}

function counsel_menu() {
    // Reset
    jQuery("ul#education-navigation").removeClass("active");
    jQuery("ul#network-navigation").removeClass("active");
    jQuery("ul#research-navigation").removeClass("active");
    mega_menu.removeClass("education");
    mega_menu.removeClass("network");
    mega_menu.removeClass("research");

    // Add
    mega_menu.addClass("counsel");
    jQuery("ul#counsel-navigation").addClass("active");
}

function research_menu() {
    // Reset
    jQuery("ul#education-navigation").removeClass("active");
    jQuery("ul#network-navigation").removeClass("active");
    jQuery("ul#counsel-navigation").removeClass("active");
    mega_menu.removeClass("education");
    mega_menu.removeClass("network");
    mega_menu.removeClass("counsel");

    // Add
    mega_menu.addClass("research");
    jQuery("ul#research-navigation").addClass("active");
}


jQuery(function() {

    jQuery("#main-navigation ul li a").click(function(e) {
        menu();
        // Show Specific Menu
        if (jQuery(this).hasClass("education-menu")) {
            education_menu();
        }
        if (jQuery(this).hasClass("network-menu")) {
            network_menu();
        }
        if (jQuery(this).hasClass("counsel-menu")) {
            counsel_menu();
        }
        if (jQuery(this).hasClass("research-menu")) {
            research_menu();
        }
    });
    jQuery("span.close-menu").click(function(e) {
        // Reset Menu

        jQuery(".expanded-navigation").removeClass("active");
        jQuery(".expanded-navigation").removeClass("education");
        jQuery(".expanded-navigation").removeClass("network");
        jQuery(".expanded-navigation").removeClass("counsel");
        jQuery(".expanded-navigation").removeClass("research");


        jQuery("ul#education-navigation").removeClass("active");
        jQuery("ul#network-navigation").removeClass("active");
        jQuery("ul#counsel-navigation").removeClass("active");
        jQuery("ul#research-navigation").removeClass("active");

        jQuery("#main-navigation ul li").removeClass("menu-item-active");
        jQuery(".hero-row").removeClass("main-menu-active");
    });
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })
});