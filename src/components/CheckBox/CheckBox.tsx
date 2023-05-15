import * as S from './elements'

interface Props {
  variant?: string
  typeM?: string
}
export const CheckBox = ({ variant, typeM, ...props }: Props) => {
  return (
    <S.CheckBox variant={variant} typeM={typeM} {...props} type='checkbox' />
  )
}
