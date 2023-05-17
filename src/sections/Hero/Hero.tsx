import * as S from './elements';
import { HTMLSectionProps } from 'types';

export interface HeroProps {
  title: string;
  subHeading: string[];
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const Hero = ({
  title,
  subHeading,
  image,
  ...props
}: HTMLSectionProps & HeroProps) => {
  return (
    <S.HeroContainer {...props}>
      <S.ContainerText>
        <S.DivElement>
          <S.NormalHeading dangerouslySetInnerHTML={{ __html: title }} />
        </S.DivElement>
        <S.DivElement variant='gap'>
          <S.Paragraph>
            {subHeading[0]}
            <br /> <br />
            {subHeading[1]}
          </S.Paragraph>
        </S.DivElement>
        <S.JoinForm {...props} />
      </S.ContainerText>

      <S.ImageContainer>
        <S.Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt='Hero Image'
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
