module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  
  theme: {
    extend: {
      backgroundImage:{
        'image':'url("./components/assets/corgi.jpg")',
        'profImage':'url("./components/assets/taco1.jpg")',
        'bathingImage':'url("./components/assets/dogbathing.jpg")',
        'eatingImage':'url("./components/assets/dogeating.jpg")',
        'sleepingImage':'url("./components/assets/dogsleeping.jpg")',
        'walkingImage':'url("./components/assets/dogwalking.jpg")'

      }
    },
  },
  plugins: [require('tailwindcss-children')],
}