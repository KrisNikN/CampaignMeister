import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { JoinFormProps } from 'collections';
import { extractDimensionsFromUrl } from 'functions';

export interface StartProps {
  desktopTitle: string;
  mobileTitle: string;
  image: {
    filename: string;
    alt: string;
  };
  forms: JoinFormProps[];
}

export const Start = ({
  desktopTitle,
  mobileTitle,
  image,
  forms,
  ...props
}: HTMLSectionProps & StartProps) => {
  const { height, width } = extractDimensionsFromUrl(image.filename);
  return (
    <S.SectionContainer>
      <S.TitleContainer>
        <S.ImageContainer>
          <S.Image src={image.filename} width={width} height={height} />
        </S.ImageContainer>
        <S.TitleMainDektop dangerouslySetInnerHTML={{ __html: desktopTitle }} />
        <S.TitleMainMobile dangerouslySetInnerHTML={{ __html: mobileTitle }} />
      </S.TitleContainer>
      <S.JoinForm {...forms[0]} />
    </S.SectionContainer>
  );
};
