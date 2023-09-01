/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'pc-xl': [
          '1.625rem',
          {
            fontWeight: '700',
            lineHeight: '40px',
            letterSpacing: '0.01em',
          },
        ],
        'pc-r': [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '200%',
            letterSpacing: '0.01em',
          },
        ],
        'pc-r-link': [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '200%',
            letterSpacing: '0.01em',
          },
        ],
        'pc-m': [
          '1.0625',
          {
            fontWeight: '800',
            lineHeight: '32px',
            letterSpacing: '0.04em',
          },
        ],
        'pc-s': [
          '0.8125rem',
          {
            fontWeight: '400',
            lineHeight: '185%',
            letterSpacing: '0.01em',
          },
        ],
        'pc-nav-default': [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '100%',
            letterSpacing: '0.04em',
          },
        ],
        'pc-nav-current': [
          '0.875rem',
          {
            fontWeight: '800',
            lineHeight: '100%',
            letterSpacing: '0.04em',
          },
        ],
        'pc-s-link': [
          '0.8125rem',
          {
            fontWeight: '400',
            lineHeight: '185%',
            letterSpacing: '0.01em',
          },
        ],
        anchor: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0.04em',
          },
        ],
        'menu-link': [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '160%',
            letterSpacing: '0.04em',
          },
        ],
        button: [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '0.04em',
          },
        ],
      },
      fontFamily: {
        noto: [
          'var(--font-noto-sans-jp)',
          '-apple-system',
          'blinkmacsystemfont',
          'Segoe UI',
          'Hiragino Kaku Gothic ProN',
          'BIZ UDPGothic',
          'meiryo',
          'sans-serif',
        ],
      },
      maxWidth: {
        '8xl': '1440px',
        container: '1120px',
      },
      gap: {
        22: '5.5rem',
      },
      margin: {
        22: '5.5rem',
      },
      screens: {
        desktop: '1120px',
      },
      lineHeight: {
        xl: '200%',
      },
      aspectRatio: {
        'topics-sub': '11 / 8',
      },
    },
  },
  plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
};
