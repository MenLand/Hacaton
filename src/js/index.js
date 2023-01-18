import './helpers/zoom-factor';

import './menu';
import './running-line';
import './footer';
import './form';
import './jury';
import './questions';
import './timeline';
import { detectBrowser } from './helpers/browser-check';

const browserName = detectBrowser();

if (browserName) {
	document.body.classList.add(browserName);
}
