import * as S from "./elements";

export const Button = ({ children, variant }) => {
  return <S.Button variant={variant}>{children}</S.Button>
}