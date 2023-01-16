const burgerMenu = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');
const navList = document.querySelector('[data-nav]').cloneNode(true);

burgerMenu.addEventListener('click', ({ currentTarget }) => {
	currentTarget.classList.toggle('burger--active');

	menu.classList.toggle('menu--active');

	if (currentTarget.classList.contains('burger--active')) {
		menu.querySelector('.menu__content').insertAdjacentElement(
			'afterbegin',
			navList
		);
	} else {
		menu.querySelector('.menu__content').removeChild(navList);
	}

	document.body.classList.toggle('disable-scroll');
	document.body.classList.toggle('menu--opened');
});
