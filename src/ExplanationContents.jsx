import * as truths from './data/index';

import DefaultQuote from './DefaultQuote';
import ExplanationDetails from './ExplanationDetails';

export default function ExplanationContents({ show }) {
	switch (show) {
		case 0:
			return <DefaultQuote />;
		case 1:
			return <ExplanationDetails source={truths.suffering} />;
		case 2:
			return <ExplanationDetails source={truths.origin} />;
		case 3:
			return <ExplanationDetails source={truths.cessation} />;
		case 4:
			return <ExplanationDetails source={truths.path} />;
		default:
			return console.warn('"Default" ExplanationContents switch statement reached');
	}
}
