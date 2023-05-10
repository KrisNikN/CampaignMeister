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
    padding: 20px;
    @media ${breakpoint.max.L} {
      align-items: flex-start;
    }
    @media ${breakpoint.max.S} {
      width: 100%;
    }
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-size: 20px;
    &:nth-child(2) {
      margin-top: 18px;
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
    padding-top: 40px;
    padding-bottom: 80px;
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
    &:nth-child(1) {
      left: 75px;
    }
    &:nth-child(3) {
      left: -75px;
    }
    @media ${breakpoint.max.L} {
      &:nth-child(1) {
        left: 10px;
      }
      &:nth-child(3) {
        left: -10px;
      }
    }
    @media ${breakpoint.max.M} {
      flex: 1;
      &:nth-child(1) {
        left: 0;
        margin-top: 40px;
      }
      &:nth-child(3) {
        left: 0;
        margin-top: 40px;
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
    padding: 40px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  `,
)

export const Image = styled(_Image)(() => css``)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    margin-top: 20px;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
)
