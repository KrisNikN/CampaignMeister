import styled, { css } from 'styled-components';
import { BlockCard as _BlockCard } from 'collections/Card';
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components';

export const BlockCard = styled(_BlockCard)(() => css``);

export const SectionContainer = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    background-color: ${colors.blue};
    border-radius: 16px;
    margin-top: 80px;
    @media ${breakpoint.max.M} {
    }
  `,
);

export const ColumnConteiner = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 60px;
    width: 100%;
    @media ${breakpoint.max.M} {
      padding: 24px 20px;
    }
  `,
);

export const MobileSpan = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      display: inline-block;
    }
  `,
);
export const DestopSpan = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    @media ${breakpoint.max.M} {
      display: none;
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
    gap: 20px;
    border-bottom: 2px solid ${colors.darkBlue};
    @media ${breakpoint.max.M} {
    }
  `,
);

export const MobileTitleMain = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    z-index: 10;
    color: ${colors.white};
    display: none;
    span {
      color: ${colors.yellow};
    }

    @media ${breakpoint.max.M} {
      display: inline-block;
    }
  `,
);

export const DesktopTitleMain = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    z-index: 10;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
      display: none;
    }
    span {
      color: ${colors.yellow};
    }
  `,
);
