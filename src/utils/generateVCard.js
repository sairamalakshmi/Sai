export function downloadVCard(vcard) {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${vcard.lastName};${vcard.firstName};;;`,
    `FN:${vcard.firstName} ${vcard.lastName}`,
    `ORG:${vcard.org}`,
    `TITLE:${vcard.title}`,
    vcard.email ? `EMAIL;TYPE=WORK:${vcard.email}` : null,
    vcard.phone ? `TEL;TYPE=CELL:${vcard.phone}` : null,
    vcard.website ? `URL:${vcard.website}` : null,
    vcard.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${vcard.linkedin}` : null,
    'END:VCARD',
  ].filter(Boolean);

  const blob = new Blob([lines.join('\n')], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${vcard.firstName}-${vcard.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
