// Google Maps API
var map;
function initMap() {
  var myLatLng = {lat: 51.4977836, lng: -0.1522502};

  map = new google.maps.Map(document.getElementById('map'), {
  center: myLatLng,
  zoom: 14,
  scrollwheel: false
  });
  var marker = new google.maps.Marker ({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP
  });
};


$(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } // End if
  });

  // Slideanim
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  //Submit button
  $('#contact-button').on('click', function() {
    var comment = $('#comments').val();
    var name = $('#name').val();
    $('#visible-comment').html('Tank you ' + name + ', we have received your message!');
    $('#comments').hide();
    $('#name').hide();
    $('#email').hide();
    $('#contact-button').hide();
    return false;
  });

  //Portfolio section

});