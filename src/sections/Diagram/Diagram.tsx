import * as S from './elements'
import { HTMLSectionProps } from 'types'
import { DiagramCard, DiagramCardProps } from 'cards'

interface DiagramProps {
  title: string
  paragraphs: string[]
  cards: DiagramCardProps[]
  mobileParagraph: string
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
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </S.TitleContainer>

      <S.ElementContainer>
        <S.ParagraphsContainer>
          <S.SpecialParagraph>
            <span dangerouslySetInnerHTML={{ __html: paragraphs[0] }} /> <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />
          </S.SpecialParagraph>
        </S.ParagraphsContainer>
        <S.MobParagraphsContainer>
          <S.SpecialParagraph>
            <span dangerouslySetInnerHTML={{ __html: mobileParagraph }} />
          </S.SpecialParagraph>
        </S.MobParagraphsContainer>
      </S.ElementContainer>

      <S.ContainerBig>
        <S.DiagramContainer>
          {cards.map((card) => {
            return <DiagramCard key={card.image.alt} {...card} />
          })}
        </S.DiagramContainer>
      </S.ContainerBig>
    </S.SectionContainer>
  )
}
