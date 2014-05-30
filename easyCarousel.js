/**
 * Created by manishk on 5/29/2014.
 */

(function($){
    $.fn.easyCarousel = function( params ) {

        var crConfig = $.extend({
            height: 250,
            width: 600,
            current: 0,
            autoScroll: true,
            photoFrame: true
        }, params);

        var $cr = $(this);
        var $items = $(this).children('li');

        var totalWidth = 0;

        var dotsNav = '<ul class="dot-navigation-ul" style="position: absolute;bottom: 10px;right:10px; margin:0; padding: 0;list-style: none outside none;">';

        $items.each(function(index, value) {
            $(this).css({'text-align': 'center', 'float': 'left'});
            var $childImage = $(this).find('img');


            if(crConfig.photoFrame) {
                $childImage.css({
                    'background-color': '#F3F3F3',
                    'border': '1px solid #DDDDDD',
                    'border-radius': '3px',
                    'padding': '5px'
                });

                $childImage.attr('width', crConfig.width - 12);
                $childImage.attr('height', crConfig.height - 12);
            } else {
                $childImage.attr('width', crConfig.width);
                $childImage.attr('height', crConfig.height);
            }

            totalWidth += $(this).outerWidth();
            if(index == crConfig.current) {
                dotsNav += '<li class="navigation-dot" style="background: none repeat scroll 0 0 #00FA9A;border-radius: 8px;float: left;height: 8px;opacity: 0.5;width: 8px;border: 4px solid #000000;cursor: pointer;margin: 3px;" id="easyCarouselDotNav-' + index + '"></li>';
            } else {
                dotsNav += '<li class="navigation-dot" style="background: none repeat scroll 0 0 #FFFFFF;border-radius: 8px;float: left;height: 8px;opacity: 0.5;width: 8px;border: 4px solid #000000;cursor: pointer;margin: 3px;" id="easyCarouselDotNav-' + index + '"></li>';
            }
        });

        dotsNav += '</ul>';

        var $wrapper = $('<div class="cr-wrapper">')
            .css({
                //'height': crConfig.height,
                'width': crConfig.width,
                'overflow': 'hidden',
                'float': 'left',
                'position': 'relative'
            });
        $cr.wrap($wrapper);
        $cr.css({'width': totalWidth, 'list-style': 'none outside none', 'margin': 0, 'padding':0, 'position': 'relative'});

        var $prev = $('<div>')
            .html('&lt;')
            .css({
                'background': 'none repeat scroll 0 0 #FFFFFF',
                'font-size': '30px',
                'height': '35px',
                'left': '20px',
                'opacity': '0.5',
                'position': 'absolute',
                'text-align': 'center',
                'text-decoration': 'none',
                'top': '50%',
                'width': '40px',
                'z-index': '1000',
                'cursor': 'pointer'
            });

        var $next = $('<div>')
            .html('&gt;')
            .css({
                'background': 'none repeat scroll 0 0 #FFFFFF',
                'font-size': '30px',
                'height': '35px',
                'opacity': '0.5',
                'position': 'absolute',
                'right': '20px',
                'text-align': 'center',
                'text-decoration': 'none',
                'top': '50%',
                'width': '40px',
                'z-index': '1000',
                'cursor': 'pointer'
            });

        var $controls = $('<div>').addClass('carousel-controls').append($prev).append($next).append($(dotsNav));
        $cr.after($controls);

        var slidePrevious = function() {
            $(".navigation-dot").css('background', 'none repeat scroll 0 0 #FFFFFF');
            var nextIndex;
            if(crConfig.current == 0 && $items.length > 0) {
                nextIndex = ($items.length - 1) ;
            } else {
                nextIndex = crConfig.current - 1;
            }

            $cr.animate({'left': -$($items[nextIndex]).position().left+'px'}, 'slow');
            $wrapper.css('width', $($items[nextIndex]).outerWidth());
            $("#easyCarouselDotNav-"+nextIndex).css('background', 'none repeat scroll 0 0 #00FA9A');
            crConfig.current = nextIndex;
        };

        var slideNext = function() {
            $(".navigation-dot").css('background', 'none repeat scroll 0 0 #FFFFFF');
            var nextIndex;
            if(crConfig.current == ($items.length-1) && $items.length > 0) {
                nextIndex = 0 ;
            } else {
                nextIndex = crConfig.current + 1;
            }

            $cr.animate({'left': -$($items[nextIndex]).position().left+'px'}, 'slow');
            $wrapper.css('width', $($items[nextIndex]).outerWidth());
            $("#easyCarouselDotNav-"+nextIndex).css('background', 'none repeat scroll 0 0 #00FA9A');
            crConfig.current = nextIndex;
        };

        var slideSpecific = function(i) {
            i = Number(i);
            $(".navigation-dot").css('background', 'none repeat scroll 0 0 #FFFFFF');
            $cr.animate({'left': -$($items[i]).position().left+'px'}, 'slow');
            $wrapper.css('width', $($items[i]).outerWidth());
            $("#easyCarouselDotNav-"+i).css('background', 'none repeat scroll 0 0 #00FA9A');
            crConfig.current = i;
            if(crConfig.autoScroll) {
                clearInterval(crConfig.interval);
                autoStartSliding();
            }
        };

        $prev.on('click', function(event) {
            slidePrevious();
            if(crConfig.autoScroll) {
                clearInterval(crConfig.interval);
                autoStartSliding();
            }
        });

        $next.on('click', function(event) {
            slideNext();
            if(crConfig.autoScroll) {
                clearInterval(crConfig.interval);
                autoStartSliding();
            }
        });

        $(".navigation-dot").on('click', function() {
            var specificIndex = $(this).attr('id').split('-')[1];
            slideSpecific(specificIndex);
        });


        var autoStartSliding = function() {
            crConfig.interval = setInterval(function() {
                slideNext();
            }, 5000);
        };

        if(crConfig.autoScroll) {
            autoStartSliding();
        }
    }
})(jQuery);