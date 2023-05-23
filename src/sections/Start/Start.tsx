import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { JoinFormProps } from 'collections';

export interface StartProps {
  desktopTitle: string;
  mobileTitle: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  joinFormProps: JoinFormProps;
}

export const Start = ({
  desktopTitle,
  mobileTitle,
  image,
  joinFormProps,
  ...props
}: HTMLSectionProps & StartProps) => {
  return (
    <S.SectionContainer>
      <S.TitleContainer>
        <S.ImageContainer>
          <S.Image src={image.src} width={image.width} height={image.height} />
        </S.ImageContainer>
        <S.TitleMainDektop dangerouslySetInnerHTML={{ __html: desktopTitle }} />
        <S.TitleMainMobile dangerouslySetInnerHTML={{ __html: mobileTitle }} />
      </S.TitleContainer>
      <S.JoinForm {...joinFormProps} />
    </S.SectionContainer>
  );
};
