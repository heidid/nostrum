var feed = new Instafeed({
    get: 'user',
    userId: '9286851909',
    // userId: '3654533039',
    accessToken: '9286851909.a700f8e.ee9068c7fa1441cb9430ef7b7d9cd2c2',
    resolution: 'standard_resolution',
    template: '<figure><a href="{{link}}" target="_blank"><img src="{{image}}" /></a><figcaption>{{caption}}</figcaption></figure>'
});
feed.run();

var address = new google.maps.LatLng(37.8760227,-122.2610094);

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: address,

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ff007b"},{"saturation":59.80000000000001},{"lightness":"51"},{"gamma":1}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ff00af"},{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"weight":"0.01"},{"saturation":"-7"},{"lightness":"-2"}]},{"featureType":"poi.school","elementType":"labels.text","stylers":[{"lightness":"-14"},{"visibility":"on"},{"saturation":"-2"},{"gamma":"1.00"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#612141"},{"lightness":50.80000000000001},{"gamma":1}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#FFE800"},{"lightness":8.600000000000009},{"gamma":1}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#FFD900"},{"saturation":44.79999999999998},{"lightness":3.6000000000000085},{"gamma":1}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#0078ff"},{"saturation":24.200000000000003},{"gamma":1},{"visibility":"off"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: address,
        title: "Nostrum Wellness Center"
    });
    marker.setMap(map);
}
