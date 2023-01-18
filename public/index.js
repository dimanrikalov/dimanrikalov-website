const year = new Date().getFullYear();
document.querySelector('.footer-text').innerText = `Diman Rikalov ® ${year}`;

const grid = document.querySelector('#grid');

animateCSSGrid.wrapGrid(grid, {duration:400, stagger:10});

const buttons = document.querySelectorAll('.nav li a');

buttons[0].classList.add('selected');

buttons.forEach((element) => {
	element.addEventListener('click', (e) => {
		grid.className = '';
        
        buttons.forEach(y => y.classList.remove('selected'));
        e.target.classList.add('selected');
        
		switch (e.target.innerText) {
			case 'Home':
				grid.classList.add('grid-list-default');
				break;
			case 'About':
				grid.classList.add('grid-list-about');
				break;
			case 'Projects':
				grid.classList.add('grid-list-projects');
				break;
			case 'Media':
				grid.classList.add('grid-list-media');
				break;
		}
	});
});

function initMap() {
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 42.1354, lng:24.7453 },
		zoom: 13,
		disableDefaultUI: true,
		mapId:'f88b4e50413c4365'
	})
}