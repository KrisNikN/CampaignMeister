import * as S from './elements';
import { extractDimensionsFromUrl } from 'functions';

import type { HTMLHeaderProps } from 'types';

export interface HeaderProps {
  image: {
    filename: string;
    alt: string;
  };
  buttonText: string;
}

export const Header = ({
  image,
  buttonText,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  // console.log(image);
  const { height, width } = extractDimensionsFromUrl(image.filename);
  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.Image
          src={image.filename}
          width={width}
          height={height}
          alt={image.alt}
          layout='intrinsic'
        />
        <S.Button>{buttonText}</S.Button>
      </S.HeaderContainer>
    </S.Header>
  );
};
