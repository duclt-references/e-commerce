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

export function convertToSlug(name: string, id: string) {
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

export function randomId(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
