'use strict';

//mustache function
//żeby działało musi byc wywołane zanim się odpali flickity slider
(function(){
  var templateSlides = document.getElementById('carousel-template-item').innerHTML;
  var templateCarousel = document.getElementById('carousel-template').innerHTML;
  Mustache.parse(templateSlides);

  var carouselItems = '';

  for(var i = 0; i < slides.length; i++){
    console.log(slides);
    carouselItems += Mustache.render(templateSlides, slides[i]);
  }

  var fullCarousel = Mustache.render(templateCarousel, {slides: carouselItems});

  result.insertAdjacentHTML('beforeend', fullCarousel);

})();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

//function for restart button
var buttonRestart = document.querySelector('.button');

buttonRestart.addEventListener( 'click', function(event) {
  flkty.select(0);
});

//function for progress bar
var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});