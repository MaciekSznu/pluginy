'use strict';

//mustache function
//żeby działało musi byc wywołane zanim się odpali flickity slider
(function(){
  var templateSlides = document.getElementById('carousel-template-item').innerHTML;
  var templateCarousel = document.getElementById('carousel-template').innerHTML;
  Mustache.parse(templateSlides);

  var carouselItems = '';
  for(var i = 0; i < slides.length; i++){
    carouselItems += Mustache.render(templateSlides, slides[i]);
  }

  var fullCarousel = Mustache.render(templateCarousel, {slides: carouselItems});
  result.insertAdjacentHTML('beforeend', fullCarousel);
  return slides;

})();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  hash: true
});

//function for restart button
var buttonRestart = document.querySelector('.button');
buttonRestart.addEventListener('click', function(event) {
  flkty.select(0);
});

//function for progress bar
var progressBar = document.querySelector('.progress-bar');
flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

//inicjalizacja mapy google
var marker = []; //tablica z markerami
window.initMap = function(){
  var map = new google.maps.Map(
    document.getElementById('map'), 
    {
      zoom: 10, center: slides[0].coords //koordynaty z pierwszego slajdu
    });
  //pętla dodająca markery oraz ich listenery wybierające slajd
  for(let i = 0; i < slides.length; i++){
    marker[i] = new google.maps.Marker({
      position: slides[i].coords,
      map: map
    });

    marker[i].addListener('click', function(){
      flkty.select(i);
    });
  }
  
  
  var previous = document.querySelector('.previous');
  var next = document.querySelector('.next');
  
  previous.addEventListener('click', function (event) {
      map.panTo(slides[(flkty.selectedIndex)].coords);
  });

  next.addEventListener('click', function (event) {
      map.panTo(slides[(flkty.selectedIndex)].coords);
  });

};


