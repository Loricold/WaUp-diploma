$(function() {

	 // Humburger 

    $('.humburger').click(function() {
    	$('.menu-collapse').toggleClass('d-none').css('order','1');
    	$('.main-menu').toggleClass('menu-opened');
    });


	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');

    // Parallax
    $window = $(window)

    $('[data-type="background"]').each(function(){
    	var $bgobj = $(this);

    		$(window).scroll(function() {

    			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    			var coords = '50% ' + yPos + 'px';
    			$bgobj.css({ backgroundPosition:coords });

    		});
    });

    // Плавное перемещение страницы к нужному блоку

    $("a.go").click(function(e) {
    	e.preventDefault();
    	elementClick = $(this).attr('href');
    	destination = $(elementClick).offset().top;
    	$("body,html").animate({scrollTop: destination }, 800);

    });

    // Modal Window

    $('.call, .cutaway__btn').click(function(){
    	$('#exampleModal').arcticmodal({
    		overlay: {
	        css: {
	            backgroundColor: 'rgba(19,23,49,0.95)',
	            opacity: 1
	        }
	    }
    	});
    });

    // Map

    ymaps.ready(init);
    var myMap, 
        myPlacemark;

     function init(){ 
        myMap = new ymaps.Map("map", {
            center: [46.47412857, 30.74600850],
            zoom: 16
        }); 
        myMap.behaviors.disable('scrollZoom');
        
        myPlacemark = new ymaps.Placemark([46.47412857, 30.74600850], {
        });
        
        myMap.geoObjects.add(myPlacemark);
    };

   
});