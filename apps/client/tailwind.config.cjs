module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inconsolata', 'ui-monospace', 'monospace'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'ui-purple': '#4B0082',
      },
      boxShadow: {
        'right-bottom': '12px 12px rgb(0, 0, 0)',
      },
    },
  },
  plugins: [],
};
