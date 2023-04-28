import styled, { css } from 'styled-components'

export const Input = styled.input<{ variant: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    font-family: 'Barlow', sans-serif;
    width: 246px;
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: transparent;
    color: ${colors.mainCol};

    background-color: ${colors.transparentWhite};
    border: 2px ${colors.transparentWhiteBorder} solid;

    border-radius: 4px;

    &:-moz-placeholder {
      color: ${colors.lightBlue};
    }
    &:focus {
      border-color: ${colors.white};
      background-color: ${colors.white};
    }

    ${(variant === 'alert' &&
      css`
        border: 2px solid ${colors.redAlert};
        color: ${colors.redAlert};
        background-color: ${colors.white};
        &:focus {
          border-color: ${colors.redAlert};
        }
      `) ||
    (variant === 'confirm' &&
      css`
        background-color: ${colors.white};
        border-color: ${colors.greenConfirm};
        &:focus {
          border-color: ${colors.greenConfirm};
        }
      `)}

    @media ${breakpoint.max.M} {
    }
  `,
)
