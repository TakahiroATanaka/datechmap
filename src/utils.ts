export const prefix = () => {
  return process.env.NEXT_PUBLIC_ENV === 'prod' ? '/experimental' : '';
};
