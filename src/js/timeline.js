import Swiper, { Navigation } from 'swiper';
// import { breakpointHelper } from './helpers/breakpoints';

// const breakpoints = breakpointHelper.getBreakpoints();
// import 'swiper/css';
const swiper = new Swiper('.timeline-slider', {
	modules: [Navigation],
	grabCursor: true,
	slidesPerView: 'auto',
	spaceBetween: 40,
	navigation: {
		nextEl: '.slider-button--right',
		prevEl: '.slider-button--left',
	},
});
