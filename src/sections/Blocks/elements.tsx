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

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
  `,
)

export const SectionContainer = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    background-color: ${colors.blue};
    border-radius: 16px;
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
    gap: 80px;
    @media ${breakpoint.max.M} {
      padding: 24px 20px;
    }
  `,
)

export const RowContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 120px;
    max-width: 1240px;
    @media ${breakpoint.max.M} {
      gap: 80px;
      flex-direction: column;
    }
  `,
)

export const BlockContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    gap: 20px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const TextBlock = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 460px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const BlockTitle = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    color: ${colors.yellow};
    font-size: 16px;
    font-weight: 600;
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
    }
  `,
)

export const Image = styled(_Image)(() => css``)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 80px;
    height: 80px;
  `,
)
