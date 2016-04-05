$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


/*-------Slider ----------------------------*/
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){
  $('.bxslider').bxSlider({auto:true});
});


/*-----shuffle plugin------------------------*/
$(document).ready(function() {
     
    /* initialize shuffle plugin */
    var $grid = $('#grid');
         
    $grid.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });
 $('#filter a').click(function (e) {
    e.preventDefault();
         
    // set active class
    $('#filter a').removeClass('active');
    $(this).addClass('active');
         
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
         
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
});

});

/*----------------Popap-----------------------*/
$('#grid').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  
});

$(document).ready(function(){
	// navigation
	$(".nav-menu li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});


$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});