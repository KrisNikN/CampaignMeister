import * as S from './elements';
import { PlanCardProps } from 'collections/Card';
import { HTMLSectionProps } from 'types';

export interface PlanProps {
  title: string;
  blocks: PlanCardProps[];
}

export const Plan = ({
  title,
  blocks,
  ...props
}: PlanProps & HTMLSectionProps) => (
  <S.SectionContainer {...props}>
    <S.TitleContainer>
      <S.TitleMain dangerouslySetInnerHTML={{ __html: title }} />
    </S.TitleContainer>
    <S.RowContainer>
      {blocks.map((block) => {
        return <S.PlanCard key={block.number} {...block} />;
      })}
    </S.RowContainer>
  </S.SectionContainer>
);
