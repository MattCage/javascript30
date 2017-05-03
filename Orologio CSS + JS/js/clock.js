var secondsHand = document.querySelector('div.hand.seconds');
var minutesHand = document.querySelector('div.hand.minutes');
var hoursHand = document.querySelector('div.hand.hours');

function setDate() {
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsInDegrees = ((seconds / 60) * 360) + 90;
  var minutes = now.getMinutes();
  var minutesInDegrees = ((minutes / 60) * 360) + 90;
  var hours = now.getHours();
  var hoursInDegrees = ((hours / 24) * 360) + 90;

  secondsHand.style.transform = "rotate(" + secondsInDegrees + "deg)";
  minutesHand.style.transform = "rotate(" + minutesInDegrees + "deg)";
  hoursHand.style.transform = "rotate(" + hoursInDegrees + "deg)";

  console.log(seconds);

}

setInterval(setDate, 1000);
