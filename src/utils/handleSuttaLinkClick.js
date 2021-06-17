export function handleSuttaLinkClick(reference) {
	const translator = /^SNP/.test(reference) ? 'mills' : 'sujato';

	const modifiedReference = /^(AN|SN)[\s][0-9]{1,3}[.]|^(MN|DN|ITI|DHP|SNP)/.test(
		reference
	)
		? `${reference.toLowerCase().replace(/\s/g, '')}/en/${translator}`
		: `${reference.toLowerCase().replace(/\s/g, '')}`;

	const referrer = window.location.href;

	return window.open(
		`https://suttacentral.net/${modifiedReference}?ref=${referrer}`,
		'_blank',
		'noopener'
	);
}
