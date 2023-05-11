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
    padding-bottom: 0;

    max-width: 894px;
    margin: 0 auto;
    padding-top: 20px;
  `,
)

export const ParagraphsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    @media ${breakpoint.max.L} {
      align-items: flex-start;
    }
    @media ${breakpoint.max.M} {
      display: none;
    }
  `,
)

export const MobParagraphsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    display: none;
    @media ${breakpoint.max.L} {
      align-items: flex-start;
    }
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-size: 16px;
    margin-top: 20px;
    line-height: 22.4px;
    font-weight: 400;
    color: ${colors.white};
  `,
)

export const SpecialParagraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-size: 20px;
    &:nth-child(2) {
      margin-top: 32px;
    }
    line-height: 28px;
    font-weight: 400;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
      &:nth-child(2) {
        margin-top: 0;
      }
    }
  `,
)

export const DiagramContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @media ${breakpoint.max.M} {
      flex-direction: column;
      align-items: flex-start;
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

export const Column = styled.div<{ variant?: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    ${variant === 'center' &&
    css`
      align-items: center;
    `}
    /* &:nth-child(1) {
      left: 75px;
    }*/
    
    @media ${breakpoint.max.M} {
      width: 100%;
      /*&:nth-child(1) {
        left: 10px;
      }
      &:nth-child(3) {
        left: -10px;
      }*/
    }
    @media ${breakpoint.max.M} {
      flex: 1;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(3) {
        left: 0;
      }
      &:nth-child(2) {
        align-items: flex-start;
        order: -1;
      }
      &:nth-child(2) {
        flex-direction: column-reverse;
      }
    }
  `,
)

export const DiagramBlock = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    max-width: 280px;
    flex-direction: column;
    margin-top: 20px;
  `,
)

export const ContainerBig = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    width: 100%;
    padding-top: 0;
    padding-bottom: 60px;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    @media ${breakpoint.max.M} {
      padding-bottom: 40px;
    }
  `,
)

export const Image = styled(_Image)(() => css``)

export const DImage = styled(_Image)(
  () => css`
    margin-top: 20px;
  `,
)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    margin-top: 40px;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
)

export const ImageDiagramContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 20px;
    position: relative;

    //width: 100vw;
    //max-width: 551.35px;
    @media ${breakpoint.max.L} {
      //max-width: 400px;
    }
    @media ${breakpoint.max.M} {
      max-width: none;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 0;
    }

    /* max-width: 702px;
    max-height: 571.35px;
    min-width: 280.05px;
    min-height: 280.05px;*/
  `,
)
