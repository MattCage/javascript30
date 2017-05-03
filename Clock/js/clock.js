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
  
  if( secondsInDegrees < 96 ) {
    secondsHand.style.transition = "none";
  } else {
    secondsHand.style.transition = "all 0.5s";
    secondsHand.style.transitionTimingFunction = "cubic-bezier(0.01, 1.65, 0.27, 0.63)";
  }

}

setInterval(setDate, 1000);
