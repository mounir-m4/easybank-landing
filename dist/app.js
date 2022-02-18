const menu = document.querySelector('.hamburger');
const btn = document.querySelector('.hamburger-btn');
const list = document.querySelector('.nav-links');
let menuOpen = false;
menu.addEventListener('click', () => {
	if (!menuOpen) {
		btn.classList.add('open');
		list.classList.remove('nav-links');
		list.classList.add('links');
		menuOpen = true;
	} else {
		btn.classList.remove('open');
		list.classList.add('nav-links');
		list.classList.remove('links');
		menuOpen = false;
	}
});
