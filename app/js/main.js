
$(document).ready(function(){


	/*FANCYBOX*/
	if ($("[data-fancybox]").length != 0)
		$("[data-fancybox]").fancybox({
			afterShow: function(instance, current) {},
			animationEffect : "zoom",
			animationDuration : 800,
			thumbs : {
				autoStart   : true
			},
			touch : false,
			transitionDuration : 366,
			transitionEffect: "zoom-in-out"
		});

	/*Подключение owl carousel*/
	$('.bnr-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 0, // Отступы
	    nav: true, // Навигация
	    dots: false, // Точки
	    navText: [
	    	'<svg class="flickity-button-icon btn-left" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>',
	    	'<svg class="flickity-button-icon btn-right" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	
	$('.services-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 0, // Отступы
	    nav: true, // Навигация
	    dots: false, // Точки
	    navText: [
	    	'<svg class="flickity-button-icon btn-left" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>',
	    	'<svg class="flickity-button-icon btn-right" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:4
	        }
	    }
	})
	$('.documents-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 30, // Отступы
	    nav: true, // Навигация
	    dots: false, // Точки
	    navText: [
	    	'<svg class="flickity-button-icon btn-left" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>',
	    	'<svg class="flickity-button-icon btn-right" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	})


 //закрывание предыдущих табов
	var tabContent = $('header .tab-content');
	tabContent.find('[data-toggle="collapse"]').on("click", function(){
		tabContent.find(".collapse").collapse("hide");
	})


	//SCROLL
    var minMenu = $(".header-scroll") || null;
    var headerRange = false;
    var staffProgressStatus = false;
    $(window).on("scroll", function(e) {

      //Адаптация хедера при скролинге
      if ($(window).scrollTop() > 90 && headerRange == false) {

        headerRange = true;
        if (minMenu) minMenu.addClass("scrolled");

      } else if ($(window).scrollTop() < 90 && headerRange == true) {
        headerRange = !true;
        if (minMenu) minMenu.removeClass("scrolled");
      } //.originalEvent.wheelDelta


    });
    $(window).trigger("scroll");



// Проверка на заполненность
    $(".form-control").on("keyup", function(){
      var that = $(this);
      if( that.val().length )
        that.addClass("filled")
      else
        that.removeClass("filled");
    })


});









console.log("end script");