import * as S from './elements';
import { HTMLSectionProps } from 'types';

export interface StartProps {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const Start = ({
  title,
  image,
  ...props
}: HTMLSectionProps & StartProps) => {
  return (
    <S.SectionContainer>
      <S.TitleContainer>
        <S.ImageContainer>
          <S.Image src={image.src} width={image.width} height={image.height} />
        </S.ImageContainer>
        <S.TitleMain dangerouslySetInnerHTML={{ __html: title }} />
      </S.TitleContainer>
      <S.JoinForm />
    </S.SectionContainer>
  );
};
