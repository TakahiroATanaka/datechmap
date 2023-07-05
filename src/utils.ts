export const prefix = () => {
  return process.env.NEXT_PUBLIC_ENV === 'prod' ? '/experimental' : '';
};

export const formatDate = (date: string) => {
  const dates = date
    .replace(/(年|月)/g, '-')
    .replace('日', '')
    .split('-');
  return `${dates[0]}-${dates[1].padStart(2, '0')}-${dates[2].padStart(2, '0')}`;
};
