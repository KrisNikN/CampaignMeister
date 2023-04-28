import styled, { css } from 'styled-components'
import type { HeaderProps } from './Header'

export const Header = styled('header')<HeaderProps>(
  ({ theme: { colors, breakpoints }, variant }) => css`
    width: 100%;
    padding: 23px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.lightBlue};
  `,
)
