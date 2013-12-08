$(document).ready(function(){

	// Small-screen navigation toggle
	$('a.touch-navigation').click(function (){
		$('.navigation > ul').slideToggle();
		return false;
	})




$(document).ready(function(){


	/*** Make Navigation Dropdown Work ***/
	$(".nav-main-small select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});



	/*** Make Slider on Homepage Work ***/
	$('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });


	/*** Sort Clipping for small Product Images ***/

	// This relieas on background-position: center; and background-size: cover; being set in the CSS

	// if (Modernizr.backgroundsize) {												// If CSS3 BG size is supported

	// 	/* newHeight = 128; /* Set default new height */

	// 	$(window).resize(function() {												// Fire on resize
	// 		h = 0; //Image Height
 // 			$('.product-image-small, .checkout-image, .product-box .image-wrapper').each(function(index) {
	// 			w = $(this).width();
	// 			h = $(this).height();
	// 			img = $(this).find('img').attr('src');

	// 			//calculate optimum height
	// 			newHeight = w*1.148; /* Arbitrarily selected as the most common aspect ratio in Le Loup product photos */

	// 			if ($(this).hasClass("checkout-image")) {
	// 				newHeight = w; /* Make it a square if it's in the chekcout */
	// 			}

	// 			$(this).css('background-image', 'url(' + img + ')'); // Set background image
	// 			$(this).find("img").css('display', 'none'); // Hide image.
	// 			$(this).height(newHeight);
	// 		});
	// 	});
	// 	$(window).resize(); //Trigger a resize event on page load.
	// }



	/*** Magnifying Glass on Product Images ***/

	//Set Default background for zoom image
	imageUrl = $('.product-image-main img').attr('src');
	$('.product-image-zoom').css('background', '#fff url(' + imageUrl + ') no-repeat');

	$(".product-image-main").mousemove(function(e){

		//Calculate size of image
		image_object = new Image();
		image_object.src = $(".product-image-main img").attr("src");
		native_width = image_object.width;
		native_height = image_object.height;

		//Only do stuff if the actual image is bigger than .product-main-image
		if (native_width > $(".product-image-main img").width()) {

			// Get the position .product-image-main with respect to the document and deuct cursor positions to get
			//  cursof position with repsect to .product-image-main.

			magnify_offset = $(this).offset();
			mx = e.pageX - magnify_offset.left;
			my = e.pageY - magnify_offset.top;

			// Fade out the glass if the mouse is outside the container
			if(mx < $(".product-image-main img").width() && my < $(".product-image-main img").height() && mx > 0 && my > 0) {
				$(".product-image-zoom").fadeIn(100);
			} else {
				$(".product-image-zoom").fadeOut(100);
			}


			// Get the ratio of the pixel under the mouse pointer with respect to the image and
			//  use that to position the large image inside the magnifying glass
			var rx = Math.round(mx/$(".product-image-main img").width()*native_width - $(".product-image-zoom").width()/2)*-1;
			var ry = Math.round(my/$(".product-image-main img").height()*native_height - $(".product-image-zoom").height()/2)*-1;
			var bgp = rx + "px " + ry + "px";

			// Move the magnifying glass with the mouse
			var px = mx - $(".product-image-zoom").width()/2;
			var py = my - $(".product-image-zoom").height()/2;

			// Apply the styles we've just created.
			$(".product-image-zoom").css({left: px, top: py, backgroundPosition: bgp});
		}
	});









	/* Magnifying for iPads - turn click events */
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
	    $(".product-image-main").click(function(){
	        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
	        //strange
	    });
	}






	/*** Custom Pinterest Pin It buttons for all images **/

	// // When the pinit JavaScript has loaded...
	// $.ajax({url: 'http://assets.pinterest.com/js/pinit.js', dataType: 'script', cache:true}).done(function(){

	// 	// For Images
	// 	$('img').not('.no-pin').each(function(){
	// 		$media = $(this).prop('src');
	// 		$description = $(this).attr("title");

	// 		$(this).after(getPinItBtnHTML($media, $description));
	// 		$pinit = $(this).next(".pinit-wrapper"); //Get Pinit div.
	// 		$targetX = $(this).position().left + parseInt($(this).css("padding-left")) + parseInt($(this).css("margin-left"));
	//     $targetY = $(this).position().top + parseInt($(this).css("padding-top")) + parseInt($(this).css("margin-top"));
	// 		$pinit.css({"top":$targetY+5,"left":$targetX+5});
	// 	});

	// 	// For Product Boxes
	// 	$('.product-box').each(function() {
	// 		$media = $(this).find('img').prop('src');
	// 		$description = $(this).find('p').attr("title");

	// 		$(this).after(getPinItBtnHTML($media, $description));
	// 		$pinit = $(this).next(".pinit-wrapper"); //Get Pinit div.
	// 		$targetX = $(this).position().left + parseInt($(this).css("padding-left")) + parseInt($(this).css("margin-left"));
	//     $targetY = $(this).position().top + parseInt($(this).css("padding-top")) + parseInt($(this).css("margin-top"));
	// 		$pinit.css({"top":$targetY+5,"left":$targetX+5});

	// 		// This handles re-skewing the odd/even items as the nth-child(odd) and nth-child(even) CSS selectors won't work thanks to the injected pinit-wrapper divs.
	// 		// :odd and :even are 0-based while :nth-child is 1-based, hence the swap below.
	// 		$(this).parent().find(".product-box:odd").addClass("product-box-even");
	// 		$(this).parent().find(".product-box:even").addClass("product-box-odd");
	// 	});

	// 	// Bind Mouseenter
	// 	$("img, .product-box").bind('mouseenter', function(){
 //        $(this).next('.pinit-wrapper').stop().fadeTo(200, 1.0, function(){ $(this).show(); });
 //    });

 //    // Bind Mouseleave
 //    $("img, .product-box").bind('mouseleave', function(){
 //        $(this).next('.pinit-wrapper').stop().fadeTo(200, 0.0, function(){ $(this).hide(); });
 //    });

 //    // On pinit button mouseenter, do not fade out
 //    $(".pinit-wrapper, .product-box").bind('mouseenter', function(){
 //        $(this).stop().stop().fadeTo(200, 1.0, function(){ $(this).show(); });
 //    });

	// 	// Handle Click Event
	// 	$('.pinit-wrapper a').click(function(e) {
	// 		e.preventDefault();
	// 		var modal = window.open($(this).prop('href'), 'signin', 'width=665,height=300,scrollbars=1,resizable=1');
 //      var wait = function() {
 //          setTimeout(function() {
 //              if (modal == null) {
 //                  failure();
 //                  return;
 //              }
 //              if (modal.closed)
 //                  $(this).setAttribute('class', 'pinned');
 //              else
 //                  wait();
 //          }, 25);
	// 		}
	// 	});
 //  });









	/*** Swapping Product Images ***/

	$("a.product-image-small").click(function(e) {
		e.preventDefault();
		imageUrl = $(this).find("img").attr('src');
		$('.product-image-main img').attr('src', imageUrl);
		$('.product-image-zoom').css('background', '#fff url(' + imageUrl + ') no-repeat');
	});











		/*** Set up button with "choose your option" and arrow ***/
		$('.btn-product-buynow-many').prop('value', '< Choose an option');


		/*** Change price when option is changed ***/
		$('#variant-select').change(function() {
			$('.product-buynow-price span').text($(this).find('option:selected').attr('data-price'));
			$('.btn-product-buynow').removeAttr('disabled').prop('value', 'Buy now!');
		});



		/*** Help Page Accordian ***/
		var allPanels = $('.accordion > dd').hide();

		$('.accordion > dt > a').click(function() {
		  allPanels.slideUp();
		  $(this).parent().next().slideDown();
		  return false;
		});


});






});