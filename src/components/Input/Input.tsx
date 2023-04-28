import * as S from "./elements";

interface Props {
  variant: string
}
export const Input = ({ children, placeholder, variant }: Props) => {
  return <S.Input type="text" variant={variant} placeholder={placeholder} />
}