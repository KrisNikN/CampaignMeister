import * as S from './elements';

import type { HTMLHeaderProps } from 'types';

export interface HeaderProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  buttonText1: string;
  buttonText2: string;
}

export const Header = ({
  image,
  buttonText1,
  buttonText2,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.ImageContainer>
          <S.Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            layout='intrinsic'
          />
        </S.ImageContainer>

        <S.ButtonsContainer>
          <S.Button>{buttonText1}</S.Button>
          <S.Button>{buttonText2}</S.Button>
        </S.ButtonsContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};
