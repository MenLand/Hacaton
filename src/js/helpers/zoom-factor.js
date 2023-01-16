import { breakpointHelper } from './breakpoints';

const getCurrentBreakpointSize = () => {
	const breakpoints = breakpointHelper.getBreakpoints();

	return parseInt(
		Object.entries(breakpoints)
			.reverse()
			.find(([name]) => breakpointHelper.isMatching(name))[1]
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
