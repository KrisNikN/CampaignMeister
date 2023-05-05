import { LinkProps as _LinkProps } from 'next/link'
import * as S from './elements'

export type HTMLLinkProps = Omit<
  JSX.IntrinsicElements['a'],
  'href' | 'onClick' | 'onMouseEnter' | 'color' | 'ref'
>

export interface LinkProps extends Omit<_LinkProps, 'onTouchStart' | 'as'> {}

export const Link = ({
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...props
}: LinkProps & HTMLLinkProps) => {
  return (
    <S.Link
      href={href}
      passHref={true}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      {...props}
    >
      {children}
    </S.Link>
  )
}
