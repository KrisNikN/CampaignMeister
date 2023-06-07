import styled, { css } from 'styled-components';
import { Input as _Input, H2 as _H2, Button as _Button } from 'components';
import { RegisterForm as _RegisterForm } from 'collections/Forms';

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

export const RegisterForm = styled(_RegisterForm)(() => css``);
