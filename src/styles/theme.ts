import { DefaultTheme } from 'styled-components'
import { breakpoints, maxWidth, minWidth } from './breakpoints'
import { typography } from './commonStyles'

export const theme: DefaultTheme = {
  colors: {
    primary: '#24CAE2',
    secondary: '#1692A4',
    vividRed: '#cf2e2e',
    white: '#FFFFFF',
    transparentWhite: '#ffffffb3',
    black: '#000000',
    lightBlue: '#7184AB',
    blue: '#173158',
    darkBlue: '#0A1C38',
    yellow: '#FCD130',
    redAlert: '#FF0000',
    transparentWhiteBorder: '#ffffff00',
    greenConfirm: '#3BE100',
    mainCol: '#0A1C38',
  },
  typography,
  gradients: {
    blueToPurple:
      'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
  },
  breakpoint: {
    max: maxWidth,
    min: minWidth,
    val: breakpoints,
  },
}
