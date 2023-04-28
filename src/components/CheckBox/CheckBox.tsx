import * as S from './elements'

interface Props {
  variant?: string
  typeM?: string
}
export const CheckBox = ({ variant, typeM }: Props) => {
  return <S.CheckBox variant={variant} typeM={typeM} type='checkbox' />
}
