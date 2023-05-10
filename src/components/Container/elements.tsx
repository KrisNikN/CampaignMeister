import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    overflow-x: hidden;
    @media ${breakpoint.max.M} {
      padding-left: 20px;
      padding-right: 20px;
    }
  `,
)
