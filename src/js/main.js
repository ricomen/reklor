//jQuery begin
$(document).ready(function() {
  //main-nav
  $(".main-nav__item:has('.main-nav__list-lvl2')").on("mouseenter", function() {
    $(this).children(".main-nav__list-lvl2").slideDown();
    
  });
  //maps
});
//jQuery end
  function initialize() {
    var centerMap = {lat: 50.456504, lng: 30.483917};
    var uluru = {lat: 50.456695, lng: 30.488477};
    var myLatlng = new google.maps.LatLng(50.456695, 30.488477);
    var myOptions = {
      zoom: 15,
      center: centerMap,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    }
    var map = new google.maps.Map(document.querySelector(".map__canvas"), myOptions); 
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title:"Reklor",

      icon: {
            url: "img/marker.png",
            scaledSize: new google.maps.Size(220, 56)
      }

    });
  };
  initialize();
