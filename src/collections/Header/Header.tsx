import * as S from './elements';
import { extractDimensionsFromUrl } from 'functions';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import type { HTMLHeaderProps } from 'types';

export interface HeaderProps {
  blok: ISbHeader;
}

export interface ISbHeader extends SbBlokData {
  image: {
    filename: string;
    alt: string;
  };
  buttonText: string;
}

export const Header = ({ blok, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { height, width } = extractDimensionsFromUrl(blok.image.filename);
  return (
    <S.Header {...props} {...storyblokEditable(blok)}>
      <S.HeaderContainer>
        <S.Image
          src={blok.image.filename}
          width={width}
          height={height}
          alt={blok.image.alt}
          layout='intrinsic'
        />
        <S.Button>{blok.buttonText}</S.Button>
      </S.HeaderContainer>
    </S.Header>
  );
};
