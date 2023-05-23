import * as S from './elements';

export interface PlanCardProps {
  number: number;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  boldPar: string;
  paragraph: string;
}

export const PlanCard = ({
  number,
  image,
  title,
  boldPar,
  paragraph,
  ...props
}: PlanCardProps) => {
  return (
    <S.ElementContainer {...props}>
      <S.Element>
        <S.ImageContainer>
          <S.Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            layout='fixed'
          />
        </S.ImageContainer>
        <S.Block>
          <S.Number>{number}</S.Number>
          <S.BlockTitle>{title}</S.BlockTitle>
          <S.BoldParagraph>{boldPar}</S.BoldParagraph>
          <S.Paragraph>{paragraph}</S.Paragraph>
        </S.Block>
      </S.Element>
    </S.ElementContainer>
  );
};
