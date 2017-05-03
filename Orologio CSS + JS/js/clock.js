var secondsHand = document.querySelector('div.hand.seconds');

function setDate() {
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsInDegrees = ((seconds / 60) * 360);

  secondsHand.style.transform = "rotate(" + secondsInDegrees + "deg)";

  console.log(seconds);

}

setInterval(setDate, 1000);
