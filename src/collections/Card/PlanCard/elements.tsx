import styled, { css } from 'styled-components';
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components';

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
);

export const Element = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 60px;
    display: flex;
    flex-direction: column;

    @media ${breakpoint.max.M} {
      padding-bottom: 40px;
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 24px;
    }
  `,
);

export const Image = styled(_Image)(() => css``);
export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 220px;

    @media ${breakpoint.max.M} {
    }
  `,
);

export const Block = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;

    @media ${breakpoint.max.M} {
    }
  `,
);

export const BlockTitle = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    margin-top: 20px;
    padding: 0;
    font-weight: 500;
    font-size: 24px;
    color: ${colors.yellow};
    @media ${breakpoint.max.M} {
    }
  `,
);

export const BoldParagraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    color: ${colors.white};
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    @media ${breakpoint.max.M} {
    }
  `,
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding: 0;
    color: ${colors.white};
    font-weight: 400;
    font-size: 16px;
    margin-top: 20px;
    line-height: 22.4px;
    @media ${breakpoint.max.M} {
    }
  `,
);

export const Number = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.darkBlue};
    color: ${colors.yellow};
    font-weight: 700;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    @media ${breakpoint.max.M} {
    }
  `,
);
