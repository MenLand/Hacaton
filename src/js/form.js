import { breakpointHelper } from './helpers/breakpoints';
import IMask from 'imask';

const formButton = document.querySelector('[data-form-btn]');
const form = document.querySelector('[data-form]');

breakpointHelper.listen({ name: 'md', useMax: true }, ({ matches }) => {
	if (!matches) {
		form.insertAdjacentElement('beforeend', formButton);
	} else {
		form.insertAdjacentElement('afterend', formButton);
	}
});

IMask(document.querySelector('[type="tel"]'), {
	mask: '{+7}(000)000-00-00',
});

document.querySelector('.form-file').addEventListener('change', function (e) {
	const $fileNameInput = this.querySelector('.form-file__name');
	const fileName = e.target.files[0].name;

	$fileNameInput.textContent = fileName;
});
