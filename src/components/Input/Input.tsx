import * as S from './elements'

interface InputProps {
  variant: string
}
export const Input = ({
  children,
  placeholder,
  variant,
  ...props
}: InputProps) => {
  return (
    <S.Input
      {...props}
      type='text'
      variant={variant}
      placeholder={placeholder}
    />
  )
}
