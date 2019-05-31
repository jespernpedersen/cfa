function temporary_showcase_function() {
    jQuery(".expanded-navigation li a").click(function(e) {
        e.preventDefault();
        nav = jQuery(this.closest("nav"));

        if (jQuery(nav).hasClass("education")) {
            window.location.replace("education-page.html");
        }
        if (jQuery(nav).hasClass("network")) {
            console.log("Network");
            window.location.replace("network-page.html");
        }
        if (jQuery(nav).hasClass("counsel")) {
            console.log("Counsel");
            window.location.replace("counsel-page.html");
        }
        if (jQuery(nav).hasClass("research")) {
            console.log("Research");
            window.location.replace("research-page.html");
        }
    });
}


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
    temporary_showcase_function();

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
    // Breadcrumb Path
    jQuery(".breadcrumb-menu span").click(function(e) {
        menu();
        // Show Specific Menu
        if (jQuery(this).hasClass("education-menu")) {
            education_menu();
            jQuery("#main-navigation ul li a.education-menu").parent().addClass("menu-item-active");
        }
        if (jQuery(this).hasClass("network-menu")) {
            network_menu();
            jQuery("#main-navigation ul li a.network-menu").parent().addClass("menu-item-active");
        }
        if (jQuery(this).hasClass("counsel-menu")) {
            counsel_menu();
            jQuery("#main-navigation ul li a.counsel-menu").parent().addClass("menu-item-active");
        }
        if (jQuery(this).hasClass("research-menu")) {
            research_menu();
            jQuery("#main-navigation ul li a.research-menu").parent().addClass("menu-item-active");
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