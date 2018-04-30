$(document).ready(function() {
      $("#menu").mmenu({
        "extensions": [
          "theme-dark"
        ],
        navbar: {
          title: "Skin a Cat"
        },
        navbars: [{
          position: "top"
        }]
      }, {
        clone: true
      });
      var API = $("#menu").data( "mmenu" );

      $("#my-button").click(function() {
        API.open();
      });
   });

   $(document).ready(function(){
       $("#menu .openable").hover(function(){
           $(this).find("ul").toggle();
       });
   });

   window.onscroll = function() {persistNav()};

   var stickyNav = document.getElementById("base-nav");
   var stickyHead = document.getElementById("nav-menu");
   var sticky = stickyNav.offsetTop;

   function persistNav() {
     if (window.pageYOffset >= sticky) {
       stickyNav.classList.add("sticky")
       stickyHead.classList.add("stickyHead")
     } else {
       stickyNav.classList.remove("sticky")
       stickyHead.classList.remove("stickyHead")
     }
   }
