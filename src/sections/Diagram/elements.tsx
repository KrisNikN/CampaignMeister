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
    margin-top: 80px;

    // padding: 30px 40px;
    background-color: ${colors.blue};
    border-radius: 16px;
    @media ${breakpoint.max.L} {
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
    @media ${breakpoint.max.L} {
    }
  `,
)

export const ParagraphsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    max-width: 894px;

    @media ${breakpoint.max.L} {
      padding-left: 0px;
      align-items: flex-start;
    }
    @media ${breakpoint.max.S} {
      max-width: 280px;
    }
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-size: 20px;
    &:nth-child(2) {
      margin-top: 20px;
    }
    font-weight: 400;
    color: ${colors.white};
    @media ${breakpoint.max.S} {
      &:nth-child(2) {
        margin-top: 0;
      }
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
          @media ${breakpoint.max.L} {
            align-items: flex-start;
            flex-direction: column-reverse;
          }
        `
      : css`
          position: relative;
          display: flex;
          justify-content: space-between;
          top: -80px;
          margin: 0 auto;
          width: 100%;
          max-width: 899px;
          left: 40px;
          @media ${breakpoint.max.L} {
            left: 0;
            top: 0;
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
          }
        `}
    @media ${breakpoint.max.L} {
    }
  `,
)

export const TitleSecond = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 24px;
    font-weight: 500;
    color: ${colors.yellow};
    @media ${breakpoint.max.L} {
    }
  `,
)

export const DiagramBlock = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    max-width: 280px;
    flex-direction: column;

    @media ${breakpoint.max.L} {
      margin-top: 20px;
    }
  `,
)

export const ContainerBig = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 40px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    @media ${breakpoint.max.L} {
      padding: 40px;
    }
  `,
)

export const Image = styled(_Image)(() => css``)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    margin-top: 20px;
    @media ${breakpoint.max.L} {
      display: block;
    }
  `,
)
