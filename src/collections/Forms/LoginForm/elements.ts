import styled, { css } from 'styled-components';
import { Input as _Input, H2 as _H2, Button as _Button } from 'components';

export const formContainer = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    z-index: 102;
    background-color: ${colors.blue};
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
);

export const Input = styled(_Input)(
  () => css`
    margin-top: 20px;
    border-radius: 20px;
  `,
) as typeof _Input;

export const H2 = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
    color: ${colors.yellow};
    border-bottom: 2px solid ${colors.lightBlue};
  `,
);

export const Button = styled(_Button)(
  () => css`
    margin-top: 20px;
  `,
);
