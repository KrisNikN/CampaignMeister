import { JoinForm as _JoinForm } from 'collections';
import styled, { css } from 'styled-components';
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components';

export const SectionContainer = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 80px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: -50%;
      bottom: 95%;
      background-image: radial-gradient(
        ${colors.footerBlue},
        ${colors.darkBlue} 40%
      );
      opacity: 0.9;
    }
    padding-bottom: 80px;
    @media ${breakpoint.max.M} {
      margin-top: 40px;
    }
  `,
);

export const TitleContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 80px 40px;
    background: transparent;
    position: relative;
    padding-top: 0;
    padding-bottom: 40px;
    border-bottom: 2px solid ${colors.darkBlue};
    @media ${breakpoint.max.M} {
    }
  `,
);
export const TitleMainDektop = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-top: 0;
    z-index: 10;
    color: ${colors.white};
    span {
      color: ${colors.yellow};
    }
    @media ${breakpoint.max.M} {
      display: none;
    }
  `,
);
export const TitleMainMobile = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-top: 0;
    z-index: 10;
    color: ${colors.white};
    display: none;
    span {
      color: ${colors.yellow};
    }
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
);

export const Image = styled(_Image)(
  ({ theme: { colors, breakpoint } }) => css`
    @media ${breakpoint.max.M} {
    }
  `,
);

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    top: -85px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    z-index: 0;

    @media ${breakpoint.max.M} {
      z-index: 0;
    }
  `,
);

export const JoinForm = styled(_JoinForm)(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    z-index: 100;
    width: 100%;
    color: ${colors.white};
    max-width: 520px;
    top: 8px;
    @media ${breakpoint.max.S} {
      width: 100%;
    }
  `,
);
