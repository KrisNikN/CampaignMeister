import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { BlockCardProps } from 'collections/Card';

export interface BlockProps {
  titleDesktop: string;
  titleMobile: string;
  rows: BlockCardProps[];
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
        <S.DesktopTitleMain
          dangerouslySetInnerHTML={{ __html: titleDesktop }}
        />
        <S.MobileTitleMain dangerouslySetInnerHTML={{ __html: titleMobile }} />
      </S.TitleContainer>

      <S.ColumnConteiner>
        {rows.map(({ bloks }) => {
          return <S.BlockCard blocks={bloks} key={bloks[0].title} />;
        })}
      </S.ColumnConteiner>
    </S.SectionContainer>
  );
};
