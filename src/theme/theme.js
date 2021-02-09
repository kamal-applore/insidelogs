import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

let Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#15B7E8',
      light: '#F6F4F2',
      dark: '#7968EE',
    },
    secondary: {
      main: '#000859',
      light: '#808080',
      dark: '#676767',
    },
    info: {
      main: '#353535',
      light: '#404040',
      dark: '#525252',
    },
    danger: {
      main: '#E54B42',
      light: '#FFC3C2',
    },
    text: {
      main: '#E5E5E5',
      light: '#3F3F3F',
      dark: '#1DA0C7',
    },
    success: {
      main: '#B124FF',
      light: '#E5F9FF',
      dark: '#D3C117',
    },
    warning: {
      main: '#F7F7FF',
      dark: '#73129A',
      light: '#FFF69F',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 750,
      lg: 1025,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Verdana',
    body1: {
      fontFamily: 'Proza Libre',
    },
  },
})
Theme = responsiveFontSizes(Theme)

export default Theme
