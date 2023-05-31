import * as S from './elements';
import { HTMLSectionProps } from 'types';
import { JoinFormProps } from 'collections';
import { extractDimensionsFromUrl } from 'functions';

export interface HeroProps {
  title: string;
  subHeading: string;
  image: {
    filename: string;
    alt: string;
  };
  forms: JoinFormProps[];
}

export const Hero = ({
  title,
  subHeading,
  image,
  forms,
  ...props
}: HTMLSectionProps & HeroProps) => {
  const { height, width } = extractDimensionsFromUrl(image.filename);
  return (
    <S.HeroContainer {...props}>
      <S.ContainerText>
        <S.DivElement>
          <S.NormalHeading dangerouslySetInnerHTML={{ __html: title }} />
        </S.DivElement>
        <S.DivElement variant='gap'>
          <S.Paragraph dangerouslySetInnerHTML={{ __html: subHeading }} />
        </S.DivElement>
        <S.JoinForm {...forms[0]} />
      </S.ContainerText>

      <S.ImageContainer>
        <S.Image
          src={image.filename}
          width={width}
          height={height}
          alt={image.alt}
          layout='intrinsic'
          priority
        />
      </S.ImageContainer>
    </S.HeroContainer>
  );
};
/*<Image
  src='/imgs/logo.png'
  width={220}
  height={28}
  alt='logo'
  layout='intrinsic'
/> */
