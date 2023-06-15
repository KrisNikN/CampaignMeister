import styled, { css } from 'styled-components';
import {
  Paragraph as _Paragraph,
  H2 as _H2,
  Button as _Button,
} from 'components';

export const DropDown = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    width: 300px;
    top: 115px;
    padding: 20px;
    right: 40px;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: column;
    z-index: 10000;
    border-radius: 10px;
    align-items: center;
  `,
);

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

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.white};
    margin-top: 20px;
    margin-right: auto;
  `,
);

export const Button = styled(_Button)(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 20px;
  `,
);
