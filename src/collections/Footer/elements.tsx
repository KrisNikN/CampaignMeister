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
    padding: 20px;
    display: flex;
    align-items: flex-start;
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
      width: 100%;
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
      width: 100%;
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
      padding-left: 20px;
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
    margin-left: 141px;
    @media ${breakpoint.max.M} {
      margin-left: 0;
      margin-top: 60px;
      flex-direction: column;
    }
  `,
)

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
)

export const LinksContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
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
    &:not(:nth-child(1)) {
      margin-top: 16px;
    }
  `,
)

export const CopyRightDestop = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    bottom: 30px;
    left: 40px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: 500;
    @media ${breakpoint.max.M} {
      display: none;
    }
  `,
)

export const CopyRightMobile = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    bottom: 30px;
    left: 20px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: 500;
    display: none;
    @media ${breakpoint.max.M} {
      display: flex;
      flex-direction: column;
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

export const YearSpan = styled.span(
  () => css`
    margin-top: 10px;
  `,
)

export const Column = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
)
