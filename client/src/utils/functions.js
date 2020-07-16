export const getLevel = points => {
	let level = 0;
	if(points <= 10) {
		level = 0;
	} else if(points > 10 && points <= 1000) {
		level = 1;
	} else if(points > 10000 && points <= 10000) {
		level = 2;
	} else if(points > 100000) {
		level = 3;
	} else {
		level = 0;
	}

	return level;
}
