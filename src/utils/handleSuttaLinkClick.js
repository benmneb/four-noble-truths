export function handleSuttaLinkClick(reference) {
	const modifiedReference = reference.includes('.')
		? reference.toLowerCase().replace(/\s/g, '') + '/en/sujato'
		: reference.toLowerCase().replace(/\s/g, '');

	return window.open(
		`https://suttacentral.net/${modifiedReference}?ref=4NobleTruths`,
		'_blank',
		'noopener noreferrer'
	);
}
