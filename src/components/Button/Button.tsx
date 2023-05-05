import * as S from './elements'

interface ButtonTypes {
  variant?: string
  children: any
}

export const Button = ({ children, variant }: ButtonTypes) => {
  return <S.Button variant={variant}>{children}</S.Button>
}
