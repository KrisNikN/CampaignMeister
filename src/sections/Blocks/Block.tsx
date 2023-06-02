import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { BlockCardProps } from 'collections/Card';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

export interface BlockProps {
  blok: ISbblock;
}

export interface ISbblock extends SbBlokData {
  titleDesktop: string;
  titleMobile: string;
  rows: BlockCardProps[];
}

export const Block = ({ blok, ...props }: HTMLSectionProps & BlockProps) => {
  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.TitleContainer>
        <S.DesktopTitleMain
          dangerouslySetInnerHTML={{ __html: blok.titleDesktop }}
        />
        <S.MobileTitleMain
          dangerouslySetInnerHTML={{ __html: blok.titleMobile }}
        />
      </S.TitleContainer>

      <S.ColumnConteiner>
        {blok.rows.map(({ bloks }) => {
          return <S.BlockCard bloks={bloks} key={bloks[0].title} />;
        })}
      </S.ColumnConteiner>
    </S.SectionContainer>
  );
};
