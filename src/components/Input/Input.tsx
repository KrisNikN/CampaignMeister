import * as S from './elements';

interface InputProps {
  variant?: string;
  placeholder?: string;
}

export const Input = ({ placeholder, variant, ...props }: InputProps) => {
  return (
    <S.Input
      {...props}
      type='text'
      variant={variant}
      placeholder={placeholder}
    />
  );
};
