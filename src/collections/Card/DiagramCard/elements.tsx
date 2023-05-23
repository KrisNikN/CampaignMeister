import styled, { css } from 'styled-components';
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components';

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
    }
    }*/
    &:nth-child(3) {
      top: -21.5px;
    }
    @media ${breakpoint.max.M} {
      width: 100%;
      /*&:nth-child(1) {
        left: 10px;
      }*/
      &:nth-child(3) {
        top: 0;
      }
    }
    @media ${breakpoint.max.M} {
      flex: 1;
      &:nth-child(1) {
        left: 0;
        order: +1;
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
);

export const Image = styled(_Image)(() => css``);

export const DImage = styled(_Image)(
  () => css`
    margin-top: 20px;
  `,
);

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    margin-top: 40px;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
);

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

    /*max-width: 702px;  
    max-height: 571.35px;
    min-width: 280.05px;
    min-height: 280.05px;*/
  `,
);

export const DiagramBlock = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    max-width: 280px;
    flex-direction: column;
    margin-top: 20px;
  `,
);

export const TitleSecond = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 24px;
    font-weight: 500;
    color: ${colors.yellow};
    @media ${breakpoint.max.L} {
    }
  `,
);

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
);
