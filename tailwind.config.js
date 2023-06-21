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
        'web-xl': [
          '2.75rem',
          {
            fontWeight: '600',
            lineHeight: '64px',
            letterSpacing: '0.04em',
          },
        ],
        'web-lg': [
          '2rem',
          {
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '0.04em',
          },
        ],
        'web-md': [
          '1.625rem',
          {
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '0.04em',
          },
        ],
        'web-sm': [
          '1.375rem',
          {
            fontWeight: '700',
            lineHeight: '40px',
            letterSpacing: '0.04em',
          },
        ],
        'web-xs': [
          '1.0625rem',
          {
            fontWeight: '700',
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
        link: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0.04em',
          },
        ],
        'menu-strong-link': [
          '1.25rem',
          {
            fontWeight: '500',
            lineHeight: '160%',
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
        'attention-card-title': [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '200%',
            letterSpacing: '0.04em',
          },
        ],
        'topics-card-title': [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '200%',
            letterSpacing: '0.04em',
          },
        ],
        'service-card-title': [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '200%',
            letterSpacing: '0.04em',
          },
        ],
        'card-title': [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '170%',
            letterSpacing: '0.04em',
          },
        ],
        'card-category': [
          '0.75rem',
          {
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0.1em',
          },
        ],
        'card-datetime': [
          '0.75rem',
          {
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0.04em',
          },
        ],
        button: [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '170%',
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
    },
  },
  plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
};
