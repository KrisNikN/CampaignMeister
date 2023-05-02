import styled, { css } from 'styled-components'
import _Link from 'next/link'

export const Link = styled(_Link)(
  ({ theme: { colors, breakpoints } }) => css`
    text-decoration: none;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    color: ${colors.lightBlue};
    font-size: 16px;
    &:hover {
      color: ${colors.yellow};
      cursor: pointer;
    }
  `,
)
