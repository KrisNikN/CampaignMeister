import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { JoinFormProps } from 'collections';
import { extractDimensionsFromUrl } from 'functions';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

export interface StartProps {
  blok: ISbStart;
}

interface ISbStart extends SbBlokData {
  desktopTitle: string;
  mobileTitle: string;
  image: {
    filename: string;
    alt: string;
  };
  forms: JoinFormProps[];
}

export const Start = ({ blok, ...props }: HTMLSectionProps & StartProps) => {
  const { height, width } = extractDimensionsFromUrl(blok.image.filename);
  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.TitleContainer>
        <S.ImageContainer>
          <S.Image src={blok.image.filename} width={width} height={height} />
        </S.ImageContainer>
        <S.TitleMainDektop
          dangerouslySetInnerHTML={{ __html: blok.desktopTitle }}
        />
        <S.TitleMainMobile
          dangerouslySetInnerHTML={{ __html: blok.mobileTitle }}
        />
      </S.TitleContainer>
      <S.JoinForm {...blok.forms[0]} />
    </S.SectionContainer>
  );
};
