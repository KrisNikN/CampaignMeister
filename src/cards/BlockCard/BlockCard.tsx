import * as S from './elements'

export interface BlockCardProps {
  blocks: {
    title: string
    text: string
    image: {
      src: string
      width: number
      height: number
      alt: string
    }
  }[]
}

export const BlockCard = ({ blocks, ...props }: BlockCardProps) => {
  return (
    <S.RowContainer>
      <S.BlockContainer>
        <S.ImageContainer>
          <S.Image
            src={blocks[0].image.src}
            width={blocks[0].image.width}
            height={blocks[0].image.height}
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
            src={blocks[1].image.src}
            width={blocks[1].image.width}
            height={blocks[1].image.height}
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
  )
}
