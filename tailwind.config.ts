import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    colors: {
      primary: '#A189FF',
      gray: '#444444',
      white: '#fff',
      dark: '#222222',
      'dark-light': ' #303030',
      'primary-linear': 'linear-gradient(90deg, #5E36FF 20.69%, #C74FFF 100%)',
      'gray-light': '#444444',
    },
    fontFamily: {
      headline: ['Rubik', 'sans-serif'],
      text: ['Roboto', 'serif'],
    },
  },
}
