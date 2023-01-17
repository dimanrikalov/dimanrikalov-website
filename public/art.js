const year = new Date().getFullYear();
document.querySelector('.footer-text').innerText = `Diman Rikalov ® ${year}`;

const drawings = document.querySelector('.artboard');

const imgAnchors = drawings.querySelectorAll('a');
imgAnchors.forEach(x => {
	x.addEventListener('click', (e) => {
        e.preventDefault();
		console.log(e.target)
	})
})
