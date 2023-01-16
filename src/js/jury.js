import Swiper, { Navigation } from 'swiper';
import { breakpointHelper } from './helpers/breakpoints';

const breakpoints = breakpointHelper.getBreakpoints();
// import 'swiper/css';
const swiper = new Swiper('.jury-slider', {
	spaceBetween: 10,
	slidesPerView: 1.1,
	loop: true,
	grabCursor: true,
	initialSlide: 1,
	centeredSlides: true,
	modules: [Navigation],
	navigation: {
		nextEl: '.slider-button--right',
		prevEl: '.slider-button--left',
	},
	slideActiveClass: 'jury-card--middle',
	breakpoints: {
		576: {
			slidesPerView: 1.7,
		},
		650: {
			slidesPerView: 2,
		},
		[Number.parseInt(breakpoints.md)]: {
			spaceBetween: 20,
			slidesPerView: 2.2,
		},
		1000: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
