import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { JoinFormProps } from 'collections';
import { extractDimensionsFromUrl } from 'functions';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

export interface HeroProps {
  blok: ISbHero;
}

interface ISbHero extends SbBlokData {
  title: string;
  subHeading: string;
  image: {
    filename: string;
    alt: string;
  };
  forms: JoinFormProps[];
}

export const Hero = ({ blok, ...props }: HTMLSectionProps & HeroProps) => {
  // console.log(blok);

  const { height, width } = extractDimensionsFromUrl(blok.image?.filename);
  return (
    <S.HeroContainer {...props} {...storyblokEditable(blok)}>
      <S.ContainerText>
        <S.DivElement>
          <S.NormalHeading dangerouslySetInnerHTML={{ __html: blok.title }} />
        </S.DivElement>
        <S.DivElement variant='gap'>
          <S.Paragraph dangerouslySetInnerHTML={{ __html: blok.subHeading }} />
        </S.DivElement>
        <S.JoinForm {...blok.forms[0]} />
      </S.ContainerText>

      <S.ImageContainer>
        <S.Image
          src={blok.image.filename}
          width={width}
          height={height}
          alt={blok.image.alt}
          layout='intrinsic'
          priority
        />
      </S.ImageContainer>
    </S.HeroContainer>
  );
};
