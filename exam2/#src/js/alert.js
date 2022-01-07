//scroll

$(document).scroll(() => {
 if ($(window).scrollTop() > 100) {
   $(".navbar").addClass("navBar");
} else {
   $(".navBar").removeClass("navBar");
}});

//hamburger
let hamburger = document.querySelector(".hamburger"); 
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    document.querySelector(".navbar__menu").classList.toggle("navbar__menu-opened");
  });
document.querySelector(".navbar__menu").addEventListener("click", function() {
   hamburger.classList.remove("is-active");
   document.querySelector(".navbar__menu").classList.remove("navbar__menu-opened");
   // hamburger.stopPropagation();
});



//navigation menu
$(document).scroll(() => {
   if ($(window).scrollTop() < 550) {
      $(".navBar__cheked").removeClass("navBar__cheked");
      $(".navbar__nav-item:first-child").addClass("navBar__cheked");   
  } else if ($(window).scrollTop() < 1900) {
   $(".navBar__cheked").removeClass("navBar__cheked");
   $(".navbar__nav-item:nth-child(2)").addClass("navBar__cheked");   
} else if ($(window).scrollTop() < 3900) {
   $(".navBar__cheked").removeClass("navBar__cheked");
   $(".navbar__nav-item:nth-child(3)").addClass("navBar__cheked");   
} else if ($(window).scrollTop() < 6600) {
   $(".navBar__cheked").removeClass("navBar__cheked");
   $(".navbar__nav-item:last-child").addClass("navBar__cheked");   
} else {
   $(".navBar__cheked").removeClass("navBar__cheked");
}
});


//header sllider
$(document).ready(function(){
   $('.header__content').slick({
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       speed: 400,
       arrows: false,
       autoplay: true
      });
   });  


//translate animation
$(document).scroll(() => {
   if ($(window).scrollTop() >= 350 && $(window).scrollTop() <= 1200) {
      $("#img-wrap__img").addClass("img-translate");
   } else {
      $(".img-translate").removeClass("img-translate");
   }
});
$(document).scroll(() => {
   if ($(window).scrollTop() >= 600 && $(window).scrollTop() <= 1550) {
      $("#img-wrap__img2").addClass("img2-translate");
   } else {
      $(".img2-translate").removeClass("img2-translate");
   }
})

//slick slider
$(document).ready(function(){
    $('.slicerWrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        prevArrow: `<img src="./img/Left.png" class="prev" alt="prev">`,
        nextArrow: `<img src="./img/Right.png" class="next" alt="next">`,
        responsive: [
           {
              breakpoint: 1350,
                settings:  {
                     variableWidth: true,
                     centerMode: true,
                  }
           },
           {
               breakpoint: 650,
               settings:  {
                  slidesToShow: 2,
                  variableWidth: true,
                  //centerMode: true,
               }
           },
        ]
    });
});

//map
function initMap() {
    var options = {
       zoom:13,
       center: { lat: 40.659998, lng: -73.878293} //Coordinates of New York
    }
 var map = new google.maps.Map(document.getElementById("map"), options);
 var marker = new google.maps.Marker({
    position:{lat: 40.678721, lng: -73.901128 }, // Brooklyn Coordinates
    map:map, //Map that we need to add
    icon:"img/Background.png",
    //icon:‘img/custom_marker.png’,
    zoom:2,
    
    // adding custom icons (Here I used a Flash logo marker)
    draggarble: false// If set to true you can drag the marker
    
 });
 var information = new google.maps.InfoWindow({
    content: "<h4>MONTICELLO COMPANY</h4>"
 });
 marker.addListener("click", function() {
    information.open(map, marker);
 });
 }

 //form validation
 function validateForm() {
   let x = document.forms["form"]["name"].value;
   let y = document.forms["form"]["email"].value;
   if (x == "" || Number(x)) {
      document.querySelector(".forma__iput").value = "";
      document.querySelector(".forma__iput").placeholder = "Error name";
      return false;
   } else if (y == "" || Number(y)) {
      document.querySelector('#email').placeholder = "Enter your Email";
      return false;
   }
   
};
// document.querySelector(".forma__button").addEventListener("click", () => {
//  return (validateForm() && validateEmail());
 
// }); 
