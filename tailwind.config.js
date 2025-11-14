module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEF2FF'
        },
        accent: '#F59E0B',
        neutral: {
          900: '#111827',
          600: '#4B5563'
        }
      },
      borderRadius: {
        sm: '6px',
        md: '12px'
      }
    },
  },
  plugins: [],
}