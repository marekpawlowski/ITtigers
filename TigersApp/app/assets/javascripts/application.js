// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 1000,
    pause_on_hover: true,
    animation_speed: 1000,
    navigation_arrows: true,
    bullets: false
  }
}); });
$("#featured1").on("ready.fndtn.orbit", function(event) {
  console.info("ready");
});
$("#featured1").on("before-slide-change.fndtn.orbit", function(event) {
  console.info("before slide change");
});
$("#featured1").on("after-slide-change.fndtn.orbit", function(event, orbit) {
  console.info("after slide change");
  console.info("slide " + orbit.slide_number + " of " + orbit.total_slides);
});
$("#featured1").on("timer-started.fndtn.orbit", function(event, orbit) {
  console.info("timer started");
});
$("#featured1").on("timer-stopped.fndtn.orbit", function(event, orbit) {
  console.info("timer stopped");
});
