
$(document).ready(function(){

	/*AOS*/
	if( "AOS" in window ){
		AOS.init({
			offset: 100,
			once: true,
			duration: 1100,
			delay: 150
		});
		setTimeout(function() { AOS.refresh(); }, 1);
	}

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
	$('.product-items.owl-carousel').owlCarousel({
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
            items:3
        }
	    }
	})


	if ($(".carousel-article").length >= 0) {
		window.carouselArticle = function() {
			var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

			for (var i = 0; i < carouselMain.length; i++) {
				var crs = $(carouselMain)
					.eq(i)
					.flickity({
						imagesLoaded: true,
						prevNextButtons: false,
						cellAlign: "center",
						bgLazyLoad: 1,
						//friction: 1,
						//selectedAttraction: 1,
						initialIndex: 1,
						draggable: false,
						contain: true,
						pageDots: false
					});
				var flkty = crs.data("flickity");

				$(carouselNav).eq(i).flickity({
					imagesLoaded: true,
					initialIndex: 1,
					asNavFor: $(carouselMain)[i],
					prevNextButtons: false,
					draggable: true,
					percentPosition: true,
					//wrapAround: true,
					cellAlign: "center",
					adaptiveHeight: true,
					//contain: true,
					pageDots: false
				});
        $("[data-fancybox]").fancybox({
          afterShow: function(instance, current) {
            this.$content.find(".carousel-main").flickity("resize");
            this.$content.find(".carousel-nav").flickity("resize");
          }
        });
			}
		}
	};
	carouselArticle();

 //закрывание предыдущих табов
	var tabContent = $('header .tab-content');
	tabContent.find('[data-toggle="collapse"]').on("click", function(){
		tabContent.find(".collapse").collapse("hide");
	})

	//MIN-MENU
	$("#min-menu").mmenu({
		extensions: [
			"wrapper-bg", // wrapper-bg black
			//"theme-dark",
			"theme-white",
			//"fullscreen",
			"listview-50",
			"fx-panels-slide-up",
			"fx-listitems-drop",
			"border-offset",
			"position-front",
			"position-right"
		],
		navbar: {
			title: "Меню"
		},
		navbars: [{
				height: 0,
				content: [
					// '<div class="close-btn close-content bar">' +
					// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
					// '</div>'
				]
			},
			{
				content: ["prev", "title"]
			}
		]
	}, {});
		
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