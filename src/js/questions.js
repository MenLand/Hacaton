import { breakpointHelper } from './helpers/breakpoints';

const $questionButton = document.querySelector('.question-card__button');
const $questionInner = document.querySelector('.question-card__inner');

breakpointHelper.listen({ name: 'xl', useMax: true }, ({ matches }) => {
	if (!matches) {
		$questionInner.insertAdjacentElement('beforeend', $questionButton);
	} else {
		$questionInner.insertAdjacentElement('afterend', $questionButton);
	}
});
