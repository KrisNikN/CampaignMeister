import React from 'react';
import * as S from './elements';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
}

export const Input = ({ placeholder, variant, ...props }: InputProps) => {
  return (
    <S.Input
      {...props}
      type={props.type || 'text'}
      variant={variant}
      placeholder={placeholder}
    />
  );
};
