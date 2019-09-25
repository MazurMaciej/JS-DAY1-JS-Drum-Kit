const buttons = [...document.querySelectorAll('.key')];
const playSound = (e) => {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`div.key[data-key="${e.keyCode}"]`);

    if (!sound) return;

    sound.currentTime = 0;
    sound.play();

    btn.classList.add('playing');
}

const removeBtnBorder = (e) => {
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName)
    e.target.classList.remove('playing');
}

buttons.forEach(button => {
    button.addEventListener('transitionend', removeBtnBorder)
})
window.addEventListener('keydown', playSound);