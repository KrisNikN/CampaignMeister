import * as S from './elements';
import { extractDimensionsFromUrl } from 'functions';

export interface BlockCardProps {
  bloks: {
    title: string;
    text: string;
    image: {
      filename: string;
      alt: string;
    };
  }[];
}

export const BlockCard = ({ bloks: blocks, ...props }: BlockCardProps) => {
  const image1 = extractDimensionsFromUrl(blocks[0].image.filename);
  const image2 = extractDimensionsFromUrl(blocks[1].image.filename);

  return (
    <S.RowContainer>
      <S.BlockContainer>
        <S.ImageContainer>
          <S.Image
            src={blocks[0].image.filename}
            width={image1.width}
            height={image1.height}
            alt={blocks[0].image.alt}
            layout='fixed'
          />
        </S.ImageContainer>

        <S.TextBlock>
          <S.BlockTitle>{blocks[0].title}</S.BlockTitle>
          <S.Paragraph>{blocks[0].text}</S.Paragraph>
        </S.TextBlock>
      </S.BlockContainer>
      <S.BlockContainer>
        <S.ImageContainer>
          <S.Image
            src={blocks[1].image.filename}
            width={image2.width}
            height={image2.height}
            alt={blocks[1].image.alt}
            layout='fixed'
          />
        </S.ImageContainer>

        <S.TextBlock>
          <S.BlockTitle>{blocks[1].title}</S.BlockTitle>
          <S.Paragraph>{blocks[1].text}</S.Paragraph>
        </S.TextBlock>
      </S.BlockContainer>
    </S.RowContainer>
  );
};
