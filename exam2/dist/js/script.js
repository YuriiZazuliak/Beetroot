//scroll

$(document).scroll(() => {
 if ($(window).scrollTop() > 600) {
   $(".navbar").addClass("navBar");
} else {
   $(".navBar").removeClass("navBar");
}});






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

//slick slider
$(document).ready(function(){
    $('.slicerWrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 400,
        prevArrow: `<img src="./img/Left.png" class="prev" alt="prev">`,
        nextArrow: `<img src="./img/Right.png" class="next" alt="next">`
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
 
