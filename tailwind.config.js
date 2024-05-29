module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  theme: {
    screens: {
      desktop: '1366px'
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors'))
      })
    }
  ]
}
