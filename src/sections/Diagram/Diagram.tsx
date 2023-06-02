import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { DiagramCardProps } from 'collections/Card';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

export interface DiagramProps {
  blok: ISbdiagram;
}

interface ISbdiagram extends SbBlokData {
  title: string;
  paragraphs: string;
  cards: DiagramCardProps[];
  mobileParagraph: string;
}

export const Diagram = ({
  blok,
  ...props
}: DiagramProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.TitleContainer>
        <S.TitleMain dangerouslySetInnerHTML={{ __html: blok.title }} />
      </S.TitleContainer>

      <S.ElementContainer>
        <S.DesktopParagraphsContainer>
          <S.SpecialParagraph
            dangerouslySetInnerHTML={{ __html: blok.paragraphs }}
          />
        </S.DesktopParagraphsContainer>

        <S.MobParagraphsContainer>
          <S.SpecialParagraph
            dangerouslySetInnerHTML={{ __html: blok.mobileParagraph }}
          />
        </S.MobParagraphsContainer>
      </S.ElementContainer>

      <S.ContainerBig>
        <S.DiagramContainer>
          {blok.cards.map((card) => {
            return <S.DiagramCard key={card.image.alt} {...card} />;
          })}
        </S.DiagramContainer>
      </S.ContainerBig>
    </S.SectionContainer>
  );
};
