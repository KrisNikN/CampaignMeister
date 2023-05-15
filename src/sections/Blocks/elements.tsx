import { TitleContainer as _TitleContainer } from 'collections'
import styled, { css } from 'styled-components'
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components'

export const TitleContainer = styled(_TitleContainer)(
  ({ theme: { colors, breakpoint } }) => css``,
)

export const SectionContainer = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    background-color: ${colors.blue};
    border-radius: 16px;
    margin-top: 80px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const ColumnConteiner = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 60px;
    width: 100%;
    @media ${breakpoint.max.M} {
      padding: 24px 20px;
    }
  `,
)

export const MobileSpan = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      display: inline-block;
    }
  `,
)
export const DestopSpan = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    @media ${breakpoint.max.M} {
      display: none;
    }
  `,
)
