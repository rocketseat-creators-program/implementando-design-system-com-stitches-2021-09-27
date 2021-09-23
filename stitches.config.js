import { createStitches } from '@stitches/react';

const { styled, getCssText, globalCss } = createStitches({
  theme: {
    primary: '#D73628',
    primaryLight: '#FC4737',
    primaryDark: '#AD1E12 ',

    background: '#2F2F33',

    title: '#E1E1E6',
    text: '#C4C4CC',

    // Outros exemplos
    // shape: '',
    // placeholder: '',
    // support: '',
    spaces: {
      0: '0px',
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      8: '2rem',
      12: '16rem',
    },
    radii: {
      full: '99999px',
      default: '5px',
    },
    fonts: {
      default: 'Roboto',
    },
  },

  utils: {
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
