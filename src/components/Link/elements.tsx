import styled, { css } from 'styled-components'
import { default as NextLink } from 'next/link'

export const Link = styled(NextLink)(
  ({ theme: { colors, breakpoint } }) => css`
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
