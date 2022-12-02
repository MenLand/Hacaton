const runningLines = document.querySelectorAll('[data-running-line]');

const cloneTextFromLine = () => {
	runningLines.forEach((runningLine) => {
		const textLine = runningLine.children[0];
		for (let i = 0; i < 3; i++) {
			runningLine.appendChild(textLine.cloneNode(true));
		}
	});
};
cloneTextFromLine();

window.addEventListener('load', () => {
	runningLines.forEach((runningLine) => {
		Array.from(runningLine.children).forEach((el) => {
			el.classList.add('--animate');
		});
	});
});
