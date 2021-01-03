const modeBtn = document.querySelector('.dark-mode-btn input');
const gridItems = document.querySelectorAll('.grid-item');
const whiteText = document.querySelectorAll('.font-white');
console.log(modeBtn);

modeBtn.addEventListener('change', () => {
	if (modeBtn.checked) {
		isChecked();
	} else {
		isUnchecked();
	}
});

function isChecked() {
	document.querySelector('body').classList.add('light');
	gridItems.forEach((item) => {
		item.classList.add('light');
	});
	whiteText.forEach((text) => {
		text.classList.add('light');
	});
}
function isUnchecked() {
	document.querySelector('body').classList.remove('light');
	gridItems.forEach((item) => {
		item.classList.remove('light');
	});
	whiteText.forEach((text) => {
		text.classList.remove('light');
	});
}
