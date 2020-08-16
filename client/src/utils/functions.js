import jwt from 'jsonwebtoken';

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

export const paswordPattern = (val, target) => {
	var upperc = /[A-Z]/g;
	var numaric = /[0-9]/g;
	var spchrt = /(?=.*[!@#$%^&*])/g;
	var length = /(?=.{6,})/g;
	var elements = Array.from(document.querySelectorAll(target + ' span'));

	if (val.trim()) {
		var pattern = [val.match(length), val.match(spchrt), val.match(upperc), val.match(numaric)];
		pattern.forEach((elem, i) => {
			if (pattern[i]) {
				elements[i].classList.remove('isError');
				elements[i].classList.add('isValid');
			} else {
				elements[i].classList.remove('isValid');
				elements[i].classList.add('isError');
			}
		})
	} else {
		elements.forEach(elem => elem.classList.remove('isValid', 'isError'));
	}
}

export const isTokenExpired = token => {
	const now = new Date();
    if (token && jwt.decode(token)) {
	  	const expiry = jwt.decode(token).exp;
	  	return new Promise(resolve => resolve(now.getTime() < expiry * 1000))
	}
	return new Promise(resolve => resolve(false))
}
