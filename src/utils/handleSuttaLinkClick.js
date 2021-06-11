export function handleSuttaLinkClick(reference) {
	const translator = /^SNP/.test(reference) ? 'mills' : 'sujato';

	const modifiedReference = /^(AN|SN)[\s][0-9]{1,3}[.]|^(MN|DN|ITI|DHP|SNP)/.test(
		reference
	)
		? `${reference.toLowerCase().replace(/\s/g, '')}/en/${translator}`
		: `${reference.toLowerCase().replace(/\s/g, '')}`;

	return window.open(
		`https://suttacentral.net/${modifiedReference}?ref=4NobleTruths`,
		'_blank',
		'noopener noreferrer'
	);
}
