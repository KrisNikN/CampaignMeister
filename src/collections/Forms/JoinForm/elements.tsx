import * as S from 'components'

import styled, { css } from 'styled-components'

export const JoinForm = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
    border-radius: 16px;
    background-color: ${colors.blue};
  `,
)

export const Input = styled(S.Input)<{ variant: string; placeholder: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css``,
)

export const Paragraph = styled(S.Paragraph)(
  ({ theme: { colors, breakpoint }, variant }) => css`
    font-weight: 500;
    font-size: 24px;
    margin: 0;
    padding: 0;
  `,
)

export const SmallParagraph = styled(S.Paragraph)(
  ({ theme: { colors, breakpoint }, variant }) => css`
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    padding: 0;
  `,
)

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
    padding: 0;
    margin: 0;
  `,
)
export const Link = styled(S.Link)(
  ({ theme: { colors, breakpoint } }) => css`
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    color: black;
    border-bottom: 1px solid black;
  `,
)

export const InputsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
)

export const Button = styled(S.Button)(
  ({ theme: { colors, breakpoint }, variant }) => css``,
)

export const CheckBoxsContainer = styled.div(
  ({ theme: { colors, breakpoint }, variant }) => css`
    display: flex;
    flex-direction: column;
    gap: 9.5px;
  `,
)

export const CheckBoxContainer = styled.div(
  ({ theme: { colors, breakpoint }, variant }) => css`
    display: flex;
    gap: 9.5px;
    align-items: center;
  `,
)

export const CheckBox = styled(S.CheckBox)<{}>(
  ({ theme: { colors, breakpoint }, variant }) => css``,
)
