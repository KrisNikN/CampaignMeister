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

export const RowContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    width: 100%;

    @media ${breakpoint.max.M} {
      flex-direction: column;
    }
  `,
)

export const ElementContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 33%;
    display: flex;
    justify-content: center;

    &:nth-child(2) {
      border-left: 2px solid ${colors.darkBlue};
      border-right: 2px solid ${colors.darkBlue};
    }
    @media ${breakpoint.max.M} {
      width: 100%;
      border-top: 2px solid ${colors.darkBlue};
      &:nth-child(2) {
        border-left: 2px solid ${colors.blue};
        border-right: 2px solid ${colors.blue};
      }

      &:nth-child(1) {
        border-top: 2px solid ${colors.blue};
      }
    }
  `,
)

export const Element = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 60px;
    display: flex;
    flex-direction: column;

    @media ${breakpoint.max.M} {
    }
  `,
)

export const Block = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${breakpoint.max.M} {
    }
  `,
)

export const BlockTitle = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 24px;
    color: ${colors.yellow};
    @media ${breakpoint.max.M} {
    }
  `,
)

export const BoldParagraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    color: ${colors.white};
    font-weight: 600;
    font-size: 16px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    color: ${colors.white};
    font-weight: 400;
    font-size: 16px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const Number = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.darkBlue};
    color: ${colors.yellow};
    font-weight: 700;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const Image = styled(_Image)(() => css``)
export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 220px;

    @media ${breakpoint.max.M} {
    }
  `,
)
