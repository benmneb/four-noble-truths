export function handleSuttaLinkClick(reference) {
	const modifiedReference = new RegExp(/(AN|SN)[\s][0-9]{1,3}[.]|(MN|DN)/).test(reference)
		? reference.toLowerCase().replace(/\s/g, '') + '/en/sujato'
		: reference.toLowerCase().replace(/\s/g, '');

	return window.open(
		`https://suttacentral.net/${modifiedReference}?ref=4NobleTruths`,
		'_blank',
		'noopener noreferrer'
	);
}
