import { Noto_Sans_JP } from 'next/font/google';

export const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  style: ['normal'],
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  preload: true,
});
