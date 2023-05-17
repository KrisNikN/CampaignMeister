import * as S from './elements';
import { PlanCard, PlanCardProps } from 'collections/Card';
import { HTMLSectionProps } from 'types';

export interface PlanSectionProps {
  title: string;
  blocks: PlanCardProps[];
}

export const Plan = ({
  title,
  blocks,
  ...props
}: PlanSectionProps & HTMLSectionProps) => (
  <S.SectionContainer {...props}>
    <S.TitleContainer>
      <S.TitleMain dangerouslySetInnerHTML={{ __html: title }} />
    </S.TitleContainer>
    <S.RowContainer>
      {blocks.map((block) => {
        return <PlanCard key={block.number} {...block} />;
      })}
    </S.RowContainer>
  </S.SectionContainer>
);
