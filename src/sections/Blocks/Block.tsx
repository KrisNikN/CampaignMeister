import * as S from './elements'
import { HTMLSectionProps } from 'types'
import { BlockCard, BlockCardProps } from 'cards'

export interface BlockProps {
  titleDesktop: string
  titleMobile: string
  rows: BlockCardProps[]
}

export const Block = ({
  titleDesktop,
  titleMobile,
  rows,
  ...props
}: HTMLSectionProps & BlockProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.TitleContainer>
        <S.DestopSpan dangerouslySetInnerHTML={{ __html: titleDesktop }} />
        <S.MobileSpan dangerouslySetInnerHTML={{ __html: titleMobile }} />
      </S.TitleContainer>

      <S.ColumnConteiner>
        {rows.map(({ blocks }) => {
          return <BlockCard blocks={blocks} key={blocks[0].title} />
        })}
      </S.ColumnConteiner>
    </S.SectionContainer>
  )
}
