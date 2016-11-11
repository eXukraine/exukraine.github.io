//Owl-Carusel
    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 600,
          paginationSpeed : 400,
          pagination: false,
          singleItem:true,
          paginationNumbers:true,
          navigationText:false,
          autoPlay: true,
          responsive: true,
          responsiveRefreshRate: 200,
          responsiveBaseWidth: window,
          transitionStyle : "fade",

         


     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
    });
    
       $(document).ready(function() {
     
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
          items : 10, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
     
    });