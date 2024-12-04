export const theme = {
  container: {
    center: true,
  },

  fontFamily: {},

  fontSize: {
    // https://tailwindcss.com/docs/font-size#using-custom-values
    h1: ['3rem', { fontWeight: '700' }], // 48px
    h2: ['2.25rem'], // 36px
    h3: '1.875rem', // 30px
    h4: '1.5rem', // 24px
    h5: '1.25rem', // 20px
    h6: '1.125rem', // 18px
    p: '1rem', // 16px
    sm: '0.875rem', // 14px
    xs: '0.75rem', // 12px
  },

  // screens: {
  //   // default screen breakpoint
  //   sm: '640px',
  //   md: '768px',
  //   lg: '1024px',
  //   xl: '1280px',
  // },

  extend: {
    colors: {
    // docs: https://tailwindcss.com/docs/customizing-colors#color-object-syntax

      primary: '#06b6d4',
      secondary: '#F46036',
      gray: {
        lightest: '#f3f4f6',
        light: '#e5e7eb',
        DEFAULT: '#d1d5db',
        dark: '#9ca3af',
        darkest: '#6b7280',
      },
    },

  },
};
