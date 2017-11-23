function playSound(event) {
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    if (!audio) return; //Stops the function from running if there is no keycode with the key
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform'); //skip it if it doesnt transform
    this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);