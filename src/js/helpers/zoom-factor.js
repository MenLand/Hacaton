import bph from 'breakpoint-helper';

const instance = bph({
	xs: '320px',
	md: '768px',
	xl: '1260px',
});

const getCurrentBreakpointSize = () => {
	const breakpoints = instance.getBreakpoints();

	return parseInt(
		Object.entries(breakpoints)
			.reverse()
			.find(([name]) => instance.isMatching(name))[1]
	);
};

const zoomingElement = () => {
	const elementsForZooming = document.querySelectorAll('[data-zooming]');

	elementsForZooming.forEach((el) => {
		const height = `${el.children[0].getBoundingClientRect().height}px`;

		el.style.height = height;
	});
};

const calculateZoomFactor = () => {
	const root = document.querySelector(':root');
	const currentBreakpointSize = getCurrentBreakpointSize();

	const zoomFactor = (window.innerWidth / currentBreakpointSize).toFixed(3);
	root.style.setProperty('--zoom-factor', zoomFactor);

	requestAnimationFrame(zoomingElement);
};

window.addEventListener('resize', calculateZoomFactor);
calculateZoomFactor();

window.addEventListener('load', () => {
	const elementsForZooming = document.querySelectorAll('[data-zooming]');
	elementsForZooming.forEach((el) => {
		el.children[0].style.height = 'auto';
	});
	calculateZoomFactor();
});
