import styled, { css } from 'styled-components'
import { FooterProps } from './Footer'
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
  Link as _Link,
} from 'components'

/*export const Footer = styled(({ ...props }: FooterProps) => (
  <footer {...props} />
))``*/

export const Footer = styled('footer')<FooterProps>(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    padding-bottom: 90px;
    background-color: ${colors.footerBlue};
    display: flex;
    justify-content: center;
    position: relative;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const ContainerFooter = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    width: 100%;
    max-width: 1440px;
    padding: 40px;
    display: flex;
    align-items: flex-start;
    gap: 141px;
    padding-bottom: ;
    @media ${breakpoint.max.M} {
      flex-direction: column;
    }
  `,
)

export const LogoQueteContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    align-items: center;
    @media ${breakpoint.max.M} {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
)

export const LogoContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding-right: 40px;

    border-right: 2px solid ${colors.blue};
    @media ${breakpoint.max.M} {
      border-right: 2px solid ${colors.footerBlue};
      border-bottom: 2px solid ${colors.blue};
      padding: 0;
      padding-bottom: 16px;
    }
  `,
)

export const QueteContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    padding-left: 40px;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
      display: none;
    }
  `,
)

export const MobileQueteContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 12px;
    font-weight: 500;
    padding: 0;
    padding-top: 16px;
    color: ${colors.white};
    @media ${breakpoint.min.M} {
      display: none;
    }
  `,
)

export const Image = styled(_Image)(() => css``)

export const LegalNavContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    gap: 59px;
    @media ${breakpoint.max.M} {
      flex-direction: column;
    }
  `,
)

export const Block = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const LinksContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media ${breakpoint.max.M} {
    }
  `,
)

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
)

export const Link = styled(_Link)<{ href: string; children: any }>(
  ({ theme: { colors } }) => css`
    padding: 0;
    margin: 0;
  `,
)

export const CopyRight = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    bottom: 30px;
    left: 40px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: 500;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const CopyLink = styled(_Link)<{ children: any }>(
  ({ theme: { colors, breakpoint } }) => css`
    border-bottom: 1px solid ${colors.yellow};
    color: ${colors.yellow};
    font-size: 12px;
    font-weight: 500;
    @media ${breakpoint.max.M} {
    }
  `,
)
