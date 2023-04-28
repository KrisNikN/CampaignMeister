import * as S from './elements'
import { Image, Button } from 'components'
import type { HTMLHeaderProps } from 'types'

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <S.Header {...props}>
      <Image
        src='/imgs/logo.png'
        width={220}
        height={28}
        alt='logo'
        layout='intrinsic'
      />
      <Button>Login</Button>
    </S.Header>
  )
}
