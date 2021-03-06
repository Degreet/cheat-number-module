const from = 10;
const to = rndNum(100, 400);

function rndNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

cheatNumber({
	from,
	to,
	step: 1,
	interval: 10,
	customInterval: {
		startOn: 10,
		interval: 140,
	},
	callback: (count, isEnded) => {
		cheatNumberEl.innerText = count;

		if (isEnded) {
			cheatNumberEl.classList.add('ended');
			setTimeout(() => {
				cheatNumberEl.classList.remove('ended');

				cheatNumberEl.ontransitionend = () => {
					cheatNumberEl.ontransitionend = null;
					downloadBtn.classList.add('show');
				};
			}, 1000);
		}
	},
});
