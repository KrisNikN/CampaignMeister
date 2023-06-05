import * as S from './elements';
import { extractDimensionsFromUrl } from 'functions';

export interface DiagramCardProps {
  variant: string;
  title: string;
  text: string;
  image: {
    filename: string;
    alt: string;
  };
  diagramImage?: {
    filename: string;
    alt: string;
  };
}

export const DiagramCard = ({
  variant,
  title,
  text,
  image,
  diagramImage,
}: DiagramCardProps) => {
  const { height, width } = extractDimensionsFromUrl(image.filename);
  if (variant === 'center')
    return (
      <S.Column variant='center'>
        <S.DiagramBlock>
          <S.TitleSecond>{title}</S.TitleSecond>
          <S.Paragraph>{text}</S.Paragraph>
        </S.DiagramBlock>
        <S.ImageContainer>
          <S.Image
            src={image.filename}
            width={width}
            height={height}
            alt={image.alt}
            layout='intrinsic'
          />
        </S.ImageContainer>
        <S.ImageDiagramContainer>
          <S.DImage
            src={diagramImage?.filename || ''}
            width={575}
            height={575}
            objectFit='cover'
            alt={diagramImage?.alt}
          />
        </S.ImageDiagramContainer>
      </S.Column>
    );

  return (
    <S.Column>
      <S.ImageContainer>
        <S.Image
          src={image.filename}
          width={width}
          height={height}
          alt={image.alt}
          layout='intrinsic'
        />
      </S.ImageContainer>
      <S.DiagramBlock>
        <S.TitleSecond>{title}</S.TitleSecond>
        <S.Paragraph>{text}</S.Paragraph>
      </S.DiagramBlock>
    </S.Column>
  );
};
