const burgerMenuHTML = document.querySelector('[data-burger]');
// const menu = document.querySelector('[data-menu]');
// const header = document.querySelector('[data-header]');
const navListHTML = document.querySelector('[data-nav]').cloneNode(true);
const menuContentHTML = document.querySelector('.menu__content');

burgerMenuHTML.addEventListener('click', ({ currentTarget }) => {
	currentTarget.classList.toggle('burger--active');

	const isMenuOpened = currentTarget.classList.contains('burger--active');
	// 	menu.classList.toggle('menu--active');
	if (isMenuOpened) {
		menuContentHTML.replaceWith(navListHTML);
	} else {
		navListHTML.replaceWith(menuContentHTML);
		// document.querySelector('.menu__content').removeChild(navList);
	}
	document.body.classList.toggle('disable-scroll');
	document.body.classList.toggle('menu--opened');
});
