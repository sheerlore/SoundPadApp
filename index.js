
function playSound(e) {
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode
  } else if (e.type === 'click') {
    keyCode = this.getAttribute('data-key')
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'box-shadow') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
  key.addEventListener('click', playSound)
});