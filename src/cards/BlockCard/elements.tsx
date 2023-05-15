import { TitleContainer as _TitleContainer } from 'collections'
import styled, { css } from 'styled-components'
import {
  H1 as _H1,
  Paragraph as _Paragraph,
  Image as _Image,
  H2 as _H2,
} from 'components'

export const RowContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    margin-bottom: 80px;
    &:nth-child(3) {
      margin-bottom: 0;
    }
    max-width: 1240px;
    @media ${breakpoint.max.M} {
      flex-direction: column;
    }
  `,
)
export const BlockContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    &:nth-child(2) {
      margin-left: 120px;
    }
    @media ${breakpoint.max.M} {
      &:nth-child(2) {
        margin-left: 0px;
        margin-top: 80px;
      }
    }
  `,
)
export const TextBlock = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 20px;
    max-width: 460px;
    @media ${breakpoint.max.M} {
    }
  `,
)

export const BlockTitle = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    color: ${colors.yellow};
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
  `,
)

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    margin-top: 25px;
    line-height: 22.4px;
    color: ${colors.white};
    @media ${breakpoint.max.M} {
    }
  `,
)

export const Image = styled(_Image)(() => css``)

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 80px;
    height: 80px;
  `,
)
