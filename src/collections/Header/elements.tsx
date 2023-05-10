import styled, { css } from 'styled-components'
import type { HeaderProps } from './Header'
import { Image as _Image, Button as _Button } from 'components'

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

export const Button = styled(_Button)(
  ({ theme: { colors, breakpoint } }) => css`
    margin-left: 40px;
    @media ${breakpoint.max.M} {
      padding: 16px 20px;
    }
  `,
)

export const Image = styled(_Image)(() => css``)
