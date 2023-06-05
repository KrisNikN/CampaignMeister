import styled, { css } from 'styled-components';
import { HTMLFooterProps } from 'types';
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
  Link as _Link,
} from 'components';
import { LinkProps } from 'next/link';

export const Footer = styled(({ ...props }: HTMLFooterProps) => (
  <footer {...props} />
))`
  width: 100%;
  padding-bottom: 90px;
  background-color: ${({ theme: { colors, breakpoint } }) => colors.footerBlue};
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ContainerFooter = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    width: 100%;
    max-width: 1440px;
    padding: 40px;
    display: flex;
    align-items: flex-start;
    @media ${breakpoint.max.M} {
      flex-direction: column;
      padding-bottom: 70px;
    }
  `,
);

export const LogoQueteContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;

    align-items: center;
    @media ${breakpoint.max.M} {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  `,
);

export const LogoContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding-right: 40px;

    border-right: 2px solid ${colors.blue};
    @media ${breakpoint.max.M} {
      border-right: 2px solid ${colors.footerBlue};
      border-bottom: 2px solid ${colors.blue};
      padding: 0;
      padding-bottom: 16px;
      width: 100%;
    }
  `,
);

export const QuoteContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding-left: 40px;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
      display: none;
      padding-left: 20px;
    }
  `,
);

export const MobileQueteContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 12px;
    font-weight: 500;
    padding: 0;
    padding-top: 16px;
    color: ${colors.white};

    display: none;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
);

export const Image = styled(_Image)(() => css``);

export const LegalNavContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    margin-left: 141px;
    @media ${breakpoint.max.M} {
      margin-left: 0;
      margin-top: 60px;
      flex-direction: column;
    }
  `,
);

export const Block = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    &:nth-child(2) {
      margin-left: 59px;
      @media ${breakpoint.max.M} {
        margin-left: 0;
        margin-top: 59px;
      }
    }
    @media ${breakpoint.max.M} {
    }
  `,
);

export const LinksContainerDesktop = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    @media ${breakpoint.max.M} {
      display: none;
    }
  `,
);

export const LinksContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  `,
);

export const LinksContainerMobile = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    display: none;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `,
);

export const BlockTitle = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.white};
    font-weight: 500;
    font-size: 20px;
    padding: 0;
    margin: 0;
    @media ${breakpoint.max.M} {
    }
  `,
);

export const Link = styled(_Link)<LinkProps>(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    &:not(:nth-child(1)) {
      margin-top: 16px;
    }
    &:nth-child(4) {
      @media ${breakpoint.max.M} {
        display: none;
      }
    }
  `,
);

export const CopyRightDestop = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    bottom: -60px;
    left: 40px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: 500;
    @media ${breakpoint.max.M} {
      display: none;
    }
    a {
      color: ${colors.yellow};
      font-weight: 500;
    }
    span {
      border-bottom: 1px solid ${colors.yellow};
    }
  `,
);

export const CopyRightMobile = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    bottom: -60px;
    left: 40px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: 500;
    display: none;
    @media ${breakpoint.max.M} {
      display: flex;
      flex-direction: column;
    }
    a {
      color: ${colors.yellow};
      font-weight: 500;
    }
    span {
      border-bottom: 1px solid ${colors.yellow};
    }
  `,
);
