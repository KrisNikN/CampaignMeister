import * as S from './elements';
import { PlanCardProps } from 'collections/Card';
import { HTMLSectionProps } from 'types';
import { storyblokEditable, SbBlokData } from '@storyblok/react';

export interface PlanProps {
  blok: ISbPlan;
}

export interface ISbPlan extends SbBlokData {
  title: string;
  blocks: PlanCardProps[];
}

export const Plan = ({ blok, ...props }: PlanProps & HTMLSectionProps) => (
  <S.SectionContainer {...props} {...storyblokEditable(blok)}>
    <S.TitleContainer>
      <S.TitleMain dangerouslySetInnerHTML={{ __html: blok.title }} />
    </S.TitleContainer>
    <S.RowContainer>
      {blok.blocks.map((block) => {
        return <S.PlanCard key={block.number} {...block} />;
      })}
    </S.RowContainer>
  </S.SectionContainer>
);
