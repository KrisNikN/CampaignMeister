import styled, { css } from 'styled-components';
import {
  Input as _Input,
  H2 as _H2,
  Button as _Button,
  Paragraph as _Paragraph,
} from 'components';

export const formContainer = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    z-index: 102;
    padding: 20px;
    background-color: ${colors.blue};
    border-radius: 10px;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 100ms ease-in-out;
    transform: translateX(20px);
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

export const ErrorP = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    margin-top: 20px;
    text-align: center;
    color: ${colors.redAlert};
  `,
);
