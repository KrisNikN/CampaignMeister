import styled, { css } from 'styled-components'
import { Paragraph as _Paragraph, Image as _Image, H1 as _H1 } from 'components'
import * as Collection from 'collections'

export const HeroContainer = styled.section(
  ({ theme: { breakpoint } }) => css`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${breakpoint.max.M} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: flex-start;
    }
  `,
)

export const JoinForm = styled(Collection.JoinForm)(
  ({ theme: { breakpoint, colors } }) => css``,
)

export const ContainerText = styled.div(
  ({ theme: { breakpoint, colors } }) => css`
    color: ${colors.white};
    display: flex;
    gap: 40px;
    width: 501px;
    align-items: center;
    flex-direction: column;

    @media ${breakpoint.max.M} {
    }
  `,
)

export const DivElement = styled.div<{ variant: string }>(
  ({ theme: { breakpoint }, variant }) => css`
    display: flex;
    width: 100%;
    ${variant === 'gap' &&
    css`
      gap: 40px;
      flex-direction: column;
    `}
    justify-content:flex-start;
  `,
)

export const Image = styled(_Image)(() => css``)

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
    padding: 0;
    margin: 0;
  `,
)

export const NormalHeading = styled(_H1)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    display: inline;
    font-weight: 500;
    font-size: 32px;
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-size: 20px;
  `,
)
