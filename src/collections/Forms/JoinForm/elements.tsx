import {
  Link as _Link,
  Input as _Input,
  Paragraph as _Paragraph,
  Button as _Button,
  CheckBox as _CheckBox,
} from 'components';

import styled, { css } from 'styled-components';

export const JoinForm = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border-radius: 16px;
    background-color: ${colors.blue};
  `,
);

export const Input = styled(_Input)<{ variant: string; placeholder: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    max-width: 333px;
    width: 100%;
    @media ${breakpoint.max.S} {
      width: 181px;
    }
  `,
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    font-weight: 500;
    font-size: 24px;
    width: 100%;
    max-width: 501px;
    line-height: 33.6px;
    margin: 0;
    padding: 0;
    @media ${breakpoint.max.M} {
      max-width: 288px;
    }
  `,
);

export const SmallParagraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    padding: 0;
    margin-left: 9.5px;
  `,
);

export const YellowStyling = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.yellow};
    padding: 0;
    margin: 0;
  `,
);
export const Link = styled(_Link)<{ children: any; href: string }>(
  ({ theme: { colors, breakpoint } }) => css`
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    color: ${colors.yellow};
    border-bottom: 1px solid ${colors.yellow};
  `,
);

export const InputsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    margin-top: 16px;
    justify-content: space-between;
    width: 100%;
  `,
);

export const Button = styled(_Button)<{ variant?: string }>(
  ({ theme: { colors, breakpoint }, variant, ...props }) => css`
    margin-left: 20px;
    @media ${breakpoint.max.M} {
      padding: 16px 24px;
    }
  `,
);

export const CheckBoxsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    margin-top: 16px;
    flex-direction: column;
  `,
);

export const CheckBox = styled(_CheckBox)<{}>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    margin: 0;
    @media ${breakpoint.max.M} {
      height: 32px;
      min-width: 32px;
    }
  `,
);

export const CheckBoxContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    &:nth-child(2) {
      margin-top: 8px;
    }
    display: flex;
    align-items: center;
  `,
);
