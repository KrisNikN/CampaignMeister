import styled, { css } from 'styled-components'
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components'
import { TitleContainer as _TitleContainer } from 'collections'

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
    display: flex;
    justify-content: center;
    width: 100%;

    margin: 0 auto;

    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  `,
)

export const ParagraphsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 894px;
    align-items: flex-start;

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
    padding-left: 0;
    padding-right: 0;
    display: none;
    @media ${breakpoint.max.L} {
      align-items: flex-start;
    }
    @media ${breakpoint.max.M} {
      display: block;
      padding: 0;
    }
  `,
)

export const SpecialParagraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    font-size: 20px;
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
      margin-top: 0;
    }
  `,
)
