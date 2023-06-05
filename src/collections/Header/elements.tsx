import styled, { css } from 'styled-components';
import { HTMLHeaderProps } from 'types';
import { Image as _Image, Button as _Button } from 'components';

export const Header = styled('header')<HTMLHeaderProps>(
  ({ theme: { colors } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${colors.lightBlue};
  `,
);

export const HeaderContainer = styled.div(
  ({ theme: { colors } }) => css`
    width: 100%;
    padding: 23px 40px;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
);

export const Button = styled(_Button)(
  ({ theme: { colors, breakpoint } }) => css`
    margin-left: 40px;
    :nth-child(2) {
      margin-left: 20px;
    }
    @media ${breakpoint.max.S} {
      padding: 16px 20px;

      :nth-child(1) {
        margin-left: 20px;
      }
      :nth-child(2) {
        margin-top: 10px;
      }
    }
  `,
);

export const Image = styled(_Image)(
  () => css`
    min-width: 500px;
  `,
);

export const ButtonsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    @media ${breakpoint.max.S} {
      flex-direction: column;
    }
  `,
);

export const ImageContainer = styled.div(
  () => css`
    min-width: 100px;
  `,
);
