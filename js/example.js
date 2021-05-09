cheatNumber({
	from: 10,
	to: 345,
	interval: 7,
	customInterval: {
		startOn: 10,
		interval: 50,
	},
	callback: (count, isEnded) => {
		cheatNumberEl.innerText = count;

		if (isEnded) {
			cheatNumberEl.classList.add('ended');
			setTimeout(() => cheatNumberEl.classList.remove('ended'), 1000);
		}
	},
});
