import styled, { css } from 'styled-components';
import {
  Paragraph as _Paragraph,
  Image as _Image,
  H1 as _H1,
} from 'components';
import * as Collection from 'collections';

export const HeroContainer = styled.section(
  ({ theme: { breakpoint } }) => css`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;

    align-items: center;

    @media ${breakpoint.max.L} {
      flex-direction: column-reverse;
    }
  `,
);

export const JoinForm = styled(Collection.JoinForm)(
  ({ theme: { breakpoint, colors } }) => css`
    margin-top: 40px;
    width: 100%;
    max-width: 501px;
    @media ${breakpoint.max.S} {
      width: 100%;
    }
  `,
);

export const ContainerText = styled.div(
  ({ theme: { breakpoint, colors } }) => css`
    color: ${colors.white};
    display: flex;
    max-width: 501px;
    align-items: center;
    flex-direction: column;

    @media ${breakpoint.max.L} {
      max-width: 1002px;
    }
  `,
);

export const DivElement = styled.div<{ variant?: string }>(
  ({ theme: { breakpoint }, variant }) => css`
    display: flex;
    &:nth-child(2) {
      margin-top: 40px;
    }
    width: 100%;
    ${variant === 'gap' &&
    css`
      flex-direction: column;
    `}
    justify-content:flex-start;
    @media ${breakpoint.max.M} {
      padding-right: 32px;
    }
  `,
);

export const Image = styled(_Image)(() => css``);

export const ImageContainer = styled.div(
  ({ theme: { breakpoint, colors } }) => css`
    position: relative;
    margin-left: 20px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 25%;
      bottom: -25%;
      background-image: radial-gradient(
        ${colors.white},
        ${colors.darkBlue} 60%
      );
      opacity: 0.08;
      @media ${breakpoint.max.L} {
        margin: 0;
        top: 50%;
        bottom: -50%;
      }
    }
    @media ${breakpoint.max.L} {
      margin: 0;
    }
    @media ${breakpoint.max.M} {
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `,
);

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
    padding: 0;
    margin: 0;
  `,
);

export const NormalHeading = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    display: inline;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    span {
      color: ${colors.yellow};
    }
  `,
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    &:nth-child(2) {
      margin-top: 27px;
    }
  `,
);
