var inputs = document.querySelectorAll('.controls input');

function HandleUpdate() {
  console.log( this.value );
}

inputs.forEach( input => input.addEventListener("change", HandleUpdate) );
inputs.forEach( input => input.addEventListener("mousemove", HandleUpdate) );
