import * as S from './elements'

interface ButtonTypes {
  variant?: string
  children: any
}

export const Button = ({ children, variant, ...props }: ButtonTypes) => {
  return (
    <S.Button {...props} variant={variant}>
      {children}
    </S.Button>
  )
}
