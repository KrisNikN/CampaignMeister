import * as S from './elements'
import { LinkProps } from 'next/link'

export const Link = ({ children, ...props }: LinkProps) => {
  return <S.Link {...props}>{children}</S.Link>
}
