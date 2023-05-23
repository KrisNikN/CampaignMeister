import * as S from './elements';

export interface DiagramCardProps {
  variant: string;
  title: string;
  text: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  diagramImage?: {
    src: string;
    width: number;
    height: number;
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
  if (variant === 'center')
    return (
      <S.Column variant='center'>
        <S.DiagramBlock>
          <S.TitleSecond>{title}</S.TitleSecond>
          <S.Paragraph>{text}</S.Paragraph>
        </S.DiagramBlock>
        <S.ImageContainer>
          <S.Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            layout='intrinsic'
          />
        </S.ImageContainer>
        <S.ImageDiagramContainer>
          <S.DImage
            src={diagramImage?.src || ''}
            width={diagramImage?.width}
            height={diagramImage?.height}
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
          src={image}
          width={image.width}
          height={image.height}
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
