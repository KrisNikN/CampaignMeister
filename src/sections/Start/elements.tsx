import {
  TitleContainer as _TitleContainer,
  JoinForm as _JoinForm,
} from 'collections'
import styled, { css } from 'styled-components'
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components'

export const SectionContainer = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 80px;

    padding-bottom: 80px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const TitleContainer = styled(_TitleContainer)(
  ({ theme: { colors, breakpoint } }) => css`
    background: transparent;
    position: relative;
    padding-top: 0;
    padding-bottom: 40px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
  `,
)

export const Image = styled(_Image)(
  ({ theme: { colors, breakpoint } }) => css`
    @media ${breakpoint.max.M} {
    }
  `,
)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    top: -85px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    z-index: -1;

    @media ${breakpoint.max.M} {
    }
  `,
)

export const JoinForm = styled(_JoinForm)(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    z-index: 100;
    width: 100%;
    color: ${colors.white};
    max-width: 520px;
    @media ${breakpoint.max.S} {
      max-width: 320px;
    }
  `,
)
