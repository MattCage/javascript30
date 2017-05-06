var inputs = document.querySelectorAll('.controls input');

function HandleUpdate() {
  var suffix = this.dataset.sizing || '';
  var inputName = "--" + this.name;
  document.documentElement.style.setProperty( inputName, this.value + suffix );
}

inputs.forEach( input => input.addEventListener('change', HandleUpdate) );
inputs.forEach( input => input.addEventListener('mousemove', HandleUpdate) );
