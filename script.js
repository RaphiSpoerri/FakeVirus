const WINDOW_WIDTH = 200;
const WINDOW_HEIGHT = 200;

let all_popups = [];
const WIDTH = 200;
const HEIGHT = 100;

function randint(min, max) {
	let dif = (max - min) + 1;
	let frac = 1 / dif;
	let quo = Math.random() / frac;
	if (isNaN(quo)) return min;
	return ~~quo + min;
}

// Try setting this to Infinity
const MAX_WINDOWS = 30;
(async function() {
	for (var i = 0; i < MAX_WINDOWS; i++) {
		const X = randint(0, 100);
		const Y = randint(0, 100);
		const TOP = screen.height * Y / 100;
		const LEFT = screen.width / 100 * X;
		let popup = window.open(
			'./virus.html',
			Date.now(),
			`width=${WIDTH},height=${HEIGHT},top=${TOP},left=${LEFT}`
		);

		all_popups.push(popup);
		await new Promise(($0 => {
			return resolve => $0.addEventListener('load', resolve, false);
		})(popup));
	}
	await new Promise(resolve => setTimeout(resolve, 1000));
	all_popups.forEach(x => x.close());
})();
