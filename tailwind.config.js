/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        // Add more custom spacing as needed
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    // Include any custom paths here for Tailwind to search for classes
  },
};
