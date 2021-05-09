function cheatNumber(params) {
	let { from, to, callback } = params;
	let customInterval;

	if (!from) return console.error('From number not found');
	else if (!to) return console.error('To number not found');
	else if (!callback || typeof callback !== 'function')
		return console.error('Callback not found');

	if (params.customInterval && typeof params.customInterval === 'object') {
		if (!params.customInterval.startOn || !params.customInterval.interval) {
			console.warn('Incorrect data (customInterval)');
		} else customInterval = params.customInterval;
	}

	const interval = setInterval(() => {
		from++;

		if (from >= to) {
			clearInterval(interval);
			callback(to, true);
		} else if (customInterval) {
			const between = to - from;

			if (between <= customInterval.startOn) {
				clearInterval(interval);

				const interval2 = setInterval(() => {
					from++;

					if (from >= to) {
						clearInterval(interval2);
						callback(to, true);
					} else {
						callback(from);
					}
				}, customInterval.interval);

				return;
			}
		}

		callback(from);
	}, params.interval || 30);
}
