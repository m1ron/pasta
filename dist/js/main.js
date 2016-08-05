/*global window, document, $, google, mapCenter, FastClick */

/** On document ready */
$(document).ready(function() {

    $('.featured').each(function() {
        $('.list', this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="prev"></span>',
            nextArrow: '<span class="next"></span>',
            adaptiveHeight: true
        });
    });

    $('.carousel').each(function() {
        $('.list', this).slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<span class="prev"></span>',
            nextArrow: '<span class="next"></span>',
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 1360,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
});
