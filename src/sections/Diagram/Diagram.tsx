import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { DiagramCard, DiagramCardProps } from 'collections/Card';

interface DiagramProps {
  title: string;
  paragraphs: string;
  cards: DiagramCardProps[];
  mobileParagraph: string;
}

export const Diagram = ({
  title,
  paragraphs,
  mobileParagraph,
  cards,
  ...props
}: DiagramProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.TitleContainer>
        <S.TitleMain dangerouslySetInnerHTML={{ __html: title }} />
      </S.TitleContainer>

      <S.ElementContainer>
        <S.DesktopParagraphsContainer>
          <S.SpecialParagraph
            dangerouslySetInnerHTML={{ __html: paragraphs }}
          />
        </S.DesktopParagraphsContainer>

        <S.MobParagraphsContainer>
          <S.SpecialParagraph
            dangerouslySetInnerHTML={{ __html: mobileParagraph }}
          />
        </S.MobParagraphsContainer>
      </S.ElementContainer>

      <S.ContainerBig>
        <S.DiagramContainer>
          {cards.map((card) => {
            return <DiagramCard key={card.image.alt} {...card} />;
          })}
        </S.DiagramContainer>
      </S.ContainerBig>
    </S.SectionContainer>
  );
};
