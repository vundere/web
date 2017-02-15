var timeNow;
var x60times = [13,43];
var sixTimes = [11,26,41,56];

//fox' stuff
function get_minutes_to_bus(bus_times) {
  var currentMin = timeNow.minutes();

  for (bus_time in bus_times) {
    if (bus_times[bus_time] > currentMin) {
      return bus_times[bus_time] - currentMin;
    };
  };
  return bus_times[0] + 60 - currentMin;
};

$(document).ready(function() {
  //Fade stuff
  $('.innerR').mouseover(function(){
    $(this).closest('.innerR').fadeTo("fast",0.7);
  });
  $('.innerR').mouseleave(function(){
    $(this).closest('.innerR').fadeTo("fast",1);
  });
  $('.innerL').mouseover(function(){
    $(this).closest('.innerL').fadeTo("fast",0.7);
  });
  $('.innerL').mouseleave(function(){
    $(this).closest('.innerL').fadeTo("fast",1);
  });

  // The meat of'er

  var realTime = setInterval(function() { // Current time
    timeNow = moment();
    $('#two').html(timeNow.format('HH:mm:ss'));
    }, 100);

  var nextBus = setInterval(function() {
    var busminX = get_minutes_to_bus(x60times);
    var busmin6 = get_minutes_to_bus(sixTimes);
    $('#three').html("X60: "+busminX +" 6: "+busmin6);
  }, 100);
});
