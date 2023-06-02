import * as S from './elements';
import { extractDimensionsFromUrl } from 'functions';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import type { HTMLHeaderProps } from 'types';

export interface HeaderProps {
  blok: ISbheader;
}

export interface ISbheader {
  image: {
    filename: string;
    alt: string;
  };
  buttonText: string;
}

export const Header = ({ blok, ...props }: HeaderProps & HTMLHeaderProps) => {
  // console.log(blok);
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
