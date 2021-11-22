import color from 'color';

// colors
export const Color = color;
export const black = '#2b2b2b';
export const red = '#de3636';
export const yellow = '#faff00';
export const blue = '#00286c';
export const orange = '#ed8b00';
export const white = '#fff';
export const green = '#04ad88';
export const brightGreen = '#00ffc7';
export const neonGreen = '#15ff7f';

export const colors = {
  accept: green,
  warn: yellow,
  error: red,
  headerFg: white,
  headerBg: '#00745b',
  menuActiveFg: orange,
};

// fonts
export const sansSerif = 'sans-serif';
export const robotoFont = `'Roboto', ${sansSerif}`;
export const fonts = {
  sansSerifFont: robotoFont,
};

// global style variables
export const variables = {
  cellPadding: '.1rem .8rem',
  siteMargin: '1rem',
  siteMaxWidth: 1300,
  baseMargin: '1rem',
};

// mixins
export const wrapper = {
  display: 'grid',
  margin: '0 auto',
  gridTemplateColumns: '1fr max-content',
  paddingLeft: `calc(env(safe-area-inset-left) + ${variables.baseMargin})`,
  paddingRight: `calc(env(safe-area-inset-right) + ${variables.baseMargin})`,
  width: '100%',
};

export const toast = {
  errorColor: colors.error,
  warnColor: colors.warn,
  msgColor: brightGreen,
  delay: 2000,
  offset: 16,
};

export const card = {
  root: {},
  header: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    padding: ['.5rem', '1rem'],
    textTransform: 'capitalize',
  },
  title: {
    color: brightGreen,
    fontWeight: 'normal',
    fontSize: 20,
    margin: 0,
    padding: 0,
  },
  t: {
    display: 'inline-block',
  },
};
