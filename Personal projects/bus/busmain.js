var timeNow;
var startLeaveX = moment('06:13', "HH:mm");
var startLeave6 = moment('06:11', "HH:mm");
var instanceX;
var instance6;

$(document).ready(function() {
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

  var realTime = setInterval(function() {
    timeNow = moment();
    $('#one').html(timeNow.format('HH:mm:ss'));
    }, 100);

  var x60time = setInterval(function() {
    var ttime = 30;
    instanceX = startLeaveX;
    if (timeNow.hours() > instanceX.hours()) {
      instanceX.add(1, 'hours');
    };
    if (timeNow.minutes() > 13 && timeNow.minutes() < 43 && instanceX.minutes() > 11) {
      instanceX.add(ttime, 'minutes');
    } else if (timeNow.minutes() > 43 && instanceX.minutes() < 43) {
      instanceX.add(ttime, 'minutes');
    }
    $('#two').html("X60: " +instanceX.format('HH:mm'));
  }, 100);

  var time6 = setInterval(function() {
    var ttime = 15;
    instance6 = startLeave6;
    if (timeNow.hours() > instance6.hours()) {
      instance6.add(1, 'hours');
    };
    if (42 > timeNow.minutes() > 11 && instance6.minutes() !== 41) {
      instance6.add(ttime, 'minutes');
    } else if (timeNow.minutes() < 11 && instance6.minutes() !== 11) {
      instance6.add(ttime, 'minutes');
    };

    $('#four').html("6: " +instance6.format('HH:mm'));
  }, 100);


  var nextBus = setInterval(function() {
    var diff6 = instance6.minutes() - timeNow.minutes();
    if (diff6 < 0) {
      diff6 = 60 + diff6;
    }
    var diffX = instanceX.minutes() - timeNow.minutes();
    if (diffX < 0) {
      diffX = 60 + diffX;
    }

    if (diff6 < diffX) {
      $('#three').html("Next: " +diff6);
    } else {
      $('#three').html("Next: " +diffX);
    };
  }, 100);
});
