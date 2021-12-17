$(document).ready(function(){
    $('.multiple-items__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: 'auto',
        accessibility: true,
        autoplay: false,
        prevArrow: `<img src="./img/Layer 10 copy.png" class="prev" alt="prev">`,
        nextArrow: `<img src="./img/Layer 10.png" class="next" alt="prev">`
    });
  });