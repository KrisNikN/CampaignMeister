import * as S from './elements';
import { extractDimensionsFromUrl } from 'functions';

export interface PlanCardProps {
  number: number;
  image: {
    filename: string;
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
  const { height, width } = extractDimensionsFromUrl(image.filename);
  return (
    <S.ElementContainer {...props}>
      <S.Element>
        <S.ImageContainer>
          <S.Image
            src={image.filename}
            width={width}
            height={height}
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
