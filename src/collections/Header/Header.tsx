import * as S from './elements';

import type { HTMLHeaderProps } from 'types';

export interface HeaderProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  buttonText: string;
}

export const Header = ({
  image,
  buttonText,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          layout='intrinsic'
        />
        <S.Button>{buttonText}</S.Button>
      </S.HeaderContainer>
    </S.Header>
  );
};
