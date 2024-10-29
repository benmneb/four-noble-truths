export function handleSuttaLinkClick(reference) {
  const modifiedReference =
    /^(AN|SN)[\s][0-9]{1,3}[.]|^(MN|DN|ITI|DHP|SNP|THAG)/.test(
      reference.toUpperCase()
    )
      ? `${reference.toLowerCase().replace(/\s/g, '')}/en/sujato`
      : `${reference.toLowerCase().replace(/\s/g, '')}`;

  const referrer = window.location.host;

  return window.open(
    `https://suttacentral.net/${modifiedReference}?ref=${referrer}`,
    '_blank',
    'noopener'
  );
}
