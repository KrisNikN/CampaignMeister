import styled, { css } from 'styled-components'
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components'
import { TitleContainer as _TitleContainer } from 'collections'

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
  `,
)

export const SectionContainer = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    // padding: 30px 40px;
    background-color: ${colors.blue};
    border-radius: 16px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const TitleContainer = styled(_TitleContainer)(
  ({ theme: { colors, breakpoint } }) => css``,
)

export const ElementContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const ParagraphsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 894px;

    @media ${breakpoint.max.M} {
      padding-left: 40px;
    }
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 400;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
    }
  `,
)

export const DiagramContainer = styled.div<{ variant: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    width: 100%;
    ${variant === 'column'
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          @media ${breakpoint.max.M} {
            align-items: flex-start;
            flex-direction: column-reverse;
          }
        `
      : css`
          position: relative;
          display: flex;
          justify-content: space-around;
          top: -80px;
          @media ${breakpoint.max.M} {
            top: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        `}
  `,
)

export const TitleSecond = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 24px;
    font-weight: 500;
    color: ${colors.yellow};
    @media ${breakpoint.max.M} {
    }
  `,
)

export const DiagramBlock = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    max-width: 280px;
    flex-direction: column;
    gap: 20px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const ContainerBig = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 40px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    @media ${breakpoint.max.M} {
      padding: 40px;
      gap: 20px;
    }
  `,
)

export const Image = styled(_Image)(() => css``)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
)
