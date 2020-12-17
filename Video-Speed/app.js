
const video = document.getElementById('#video');
const speedBtns = document.getElementsByClassName('rate');

function setSpeed() {
	video.playbackRate = this.value.rate;
	speedBtns.forEach(speedBtn => speedBtn.classList.remove('active'));
	this.classList.add('active');
}
speedBtns.forEach(speedBtn => {
	speedBtn.addEventListener('click', setSpeed);
});