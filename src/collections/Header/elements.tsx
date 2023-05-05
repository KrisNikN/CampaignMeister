import styled, { css } from 'styled-components'
import type { HeaderProps } from './Header'

export const Header = styled('header')<HeaderProps>(
  ({ theme: { colors } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${colors.lightBlue};
  `,
)

export const HeaderContainer = styled.div(
  ({ theme: { colors } }) => css`
    width: 100%;
    padding: 23px 40px;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
)
