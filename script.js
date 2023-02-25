// Smooth scrolling



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Toggle menu on small screens
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		nav.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		nav.classList.remove('open');
		menuOpen = false;
	}
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuBtn.classList.remove('open');
		nav.classList.remove('open');
		menuOpen = false;
	});
});
