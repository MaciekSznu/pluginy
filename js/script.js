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

//inicjalizacja mapy google
 window.initMap = function() {
  // The location of Gerlach
  var gerlach = {lat: 49.165274, lng: 20.133641};
  // The map, centered at Garlach
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom:11, center: gerlach});
  // The marker, positioned at Gerlach
  var marker = new google.maps.Marker({position: gerlach, map: map});
}