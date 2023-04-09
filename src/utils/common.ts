export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency);
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase();
}

export function convertToSlug(name: string, id: number) {
  return (
    name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '') +
    '-' +
    id
  );
}

export function getIdFromSlug(slug: string) {
  const arr = slug.split('-');
  return arr[arr.length - 1];
}
