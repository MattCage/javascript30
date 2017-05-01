// Window will listen to any key down
window.addEventListener('keydown', function(e) {
  // Feed up a constant with the element selected by the keycode of the key pressed
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // If the audio constant does not exist, return from the function
  if (!audio) return;

  // Restart the sound and play it
  audio.currentTime = 0;
  audio.play();
  
});
