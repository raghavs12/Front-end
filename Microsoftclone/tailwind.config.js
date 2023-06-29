/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'a': '0px',
      'xsm': {'max': '860px'},
      'xssm': {'max': '539px'},
      'b': {'max': '352px'},
      'smm': '390px',
      'xxsm': '540px',
      'ssm': '632px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'mdd': {'max': '707px'},
      'md': '860px',
      'xmd': {'max': '860px'},
      // => @media (min-width: 768px) { ... }
      'llg': '1008px',
      'lg': '1026px',
      'lggg': {'max': '1002px'},
      'lgg': {'max': '1022px'},
      // => @media (min-width: 1024px) { ... }
      'xxl': {'max': '1083px'},
      'xl': '1084px',
      // => @media (min-width: 1280px) { ... }
      '1.5xl': {'max': '1400px'},

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

