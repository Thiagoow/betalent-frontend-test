export const lightTheme = {
  colors: {
    primary: '#0500FF',
    secondary: '#EDEFFB',
    black: '#1C1C1C',
    white: '#FFFFFF',
    gray: {
      20: '#9E9E9E',
      10: '#DFDFDF',
      5: '#F5F5F5',
      0: '#F0F0F0'
    }
  },
  spacing: {
    medium80: '80px',
    medium60: '60px',
    medium40: '40px',
    medium32: '32px',
    regular28: '28px',
    regular20: '20px',
    regular16: '16px',
    little08: '8px',
    little04: '4px'
  },
  typography: {
    fontFamily: `'Helvetica Neue', Helvetica, sans-serif`,
    h1: { fontSize: '20px', fontWeight: 500 },
    h2: { fontSize: '16px', fontWeight: 500 },
    h3: { fontSize: '16px', fontWeight: 400 },
    body: { fontSize: '16px', fontWeight: 400 }
  },
  shadows: {
    md: '0px 2px 8px 0px #00000033',
    sm: '0px 2px 4px 0px #00000033'
  }
};

export type ThemeType = typeof lightTheme;
