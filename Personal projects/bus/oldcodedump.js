var startLeaveX = moment('06:13', "HH:mm"); //random X60 timestamp
// 13, 43
var startLeave6 = moment('06:11', "HH:mm"); //random 6 timestamp
// 11, 26, 41, 56
var instanceX;
var instance6;

var x60time = setInterval(function() {
  var ttime = 30;
  instanceX = startLeaveX;
  if (timeNow.hours() > instanceX.hours()) {
    instanceX.add(1, 'hours');
  };
  if (timeNow.minutes() > 13 && timeNow.minutes() < 43 && instanceX.minutes() > 11 && instanceX.minutes() !== 43) {
    instanceX.add(ttime, 'minutes');
  } else if (timeNow.minutes() > 43 && instanceX.minutes() < 43 && instanceX.minutes() !== 13) {
    instanceX.add(ttime, 'minutes');
    instanceX.add(1, 'hours');
  }
  $('#two').html("X60: " +instanceX.format('HH:mm'));
}, 100);

var time6 = setInterval(function() {
  var ttime = 15;
  instance6 = startLeave6;
  if (timeNow.hours() > instance6.hours()) {
    instance6.add(1, 'hours');
  };
  if (26 > timeNow.minutes() > 11 && timeNow.minutes() < 26 && instance6.minutes() !== 26) {
    instance6.add(ttime, 'minutes');
  } else if (timeNow.minutes() > 26 && timeNow.minutes() < 41 && instance6.minutes() !== 41) {
    instance6.add(ttime, 'minutes');
  } else if (timeNow.minutes() > 41 && timeNow.minutes() < 56 && instance6.minutes() !== 56) {
    instance6.add(ttime, 'minutes');
  } else if (timeNow.minutes() > 56 && instance6.minutes() !== 11) {
    instance6.add(ttime, 'minutes');
    instance6.add(1, 'hours');
  };
  $('#four').html("6: " +instance6.format('HH:mm'));
}, 100);


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
