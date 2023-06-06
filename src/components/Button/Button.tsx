import React, { MouseEventHandler } from 'react';
import * as S from './elements';

interface ButtonProps {
  variant?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
}

export const Button = ({
  children,
  variant,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <S.Button {...props} variant={variant} onClick={onClick} type={type}>
      {children}
    </S.Button>
  );
};
