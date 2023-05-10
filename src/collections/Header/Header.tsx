import * as S from './elements'

import type { HTMLHeaderProps } from 'types'

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.Image
          src='/imgs/logo.png'
          width={220}
          height={28}
          alt='logo'
          layout='intrinsic'
        />
        <S.Button>Login</S.Button>
      </S.HeaderContainer>
    </S.Header>
  )
}
