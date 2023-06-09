import styled, { css } from 'styled-components';

export const CheckBox = styled.input<{ variant?: string; typeM?: string }>(
  ({ theme: { colors }, variant, typeM }) => css`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    accent-color: ${colors.yellow};
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 2px solid ${colors.lightBlue};
    border-radius: 4px;
    cursor: pointer;

    ${(variant === 'yellow' &&
      css`
        border-color: ${colors.yellow};
      `) ||
    (variant === 'alert' &&
      css`
        border-color: ${colors.redAlert};
      `)}
    &:checked {
      background-color: ${colors.yellow};
      border-color: ${colors.yellow};
    }

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${colors.mainCol};
      background-color: CanvasText;
      transform-origin: bottom left;
      clip-path: polygon(
        17% 54%,
        28% 43%,
        38% 54%,
        70% 22%,
        81% 33%,
        38% 75%,
        17% 54%
      );
      ${typeM === 'mobile' &&
      css`
        width: 10px;
        height: 10px;
      `}
    }
    &:checked::before {
      transform: scale(1);
    }

    display: grid;
    place-content: center;
  `,
);
