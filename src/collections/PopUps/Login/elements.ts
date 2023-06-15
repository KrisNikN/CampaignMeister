import styled, { css } from 'styled-components';
import { Button as _Button, Paragraph as _Paragraph } from 'components';
import { LoginForm as _LoginForm } from 'collections/Forms';

export const Overlay = styled.div(
  () => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
);

export const LoginForm = styled(_LoginForm)(() => css``);

export const Button = styled(_Button)(
  () => css`
    margin-top: 20px;
  `,
);

export const FormContainer = styled.div(
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
    min-width: 350px;
  `,
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.white};
    margin-top: 20px;
  `,
);
