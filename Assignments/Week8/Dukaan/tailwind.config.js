/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#146eb4',
          710: '#0e4f82',
          720: '#1e2640',
          730: '#353c53',
          740: '#494f64',
        },
      },
    },
  },
  plugins: [],
}
