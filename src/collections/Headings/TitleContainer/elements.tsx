import styled, { css } from 'styled-components'
import { H1 as _H1 } from 'components'

export const TitleContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    gap: 20px;
    border-bottom: 2px solid ${colors.darkBlue};
    @media ${breakpoint.max.M} {
    }
  `,
)
export const TitleMain = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    color: ${colors.white};
  `,
)
