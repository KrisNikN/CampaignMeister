import * as S from './elements'

export const Hero = ({ ...props }) => {
  return (
    <S.HeroContainer {...props}>
      <S.ContainerText>
        <S.DivElement>
          <S.NormalHeading>
            <S.YellowStyling>
              The ugly truth: Your campaign data are a mess.
            </S.YellowStyling>
            By fixing it, you can improve your campaign performance with over
            25%.
          </S.NormalHeading>
        </S.DivElement>

        <S.DivElement variant='gap'>
          <S.Paragraph>
            Optimising campaigns is hard, especially if you lack trustworthy
            data. Unfortunately this is the case for more than 65% of the
            companies.
          </S.Paragraph>
          <S.Paragraph>
            Boost your performance by fixing your data across all channels,
            brands and agencies.
          </S.Paragraph>
        </S.DivElement>
        <S.JoinForm {...props} />
      </S.ContainerText>

      <S.ImageContainer>
        <S.Image
          src='/imgs/HeroImage.png'
          width={740}
          height={498.63}
          alt='Hero Image'
          layout='intrinsic'
          priority
        />
      </S.ImageContainer>
    </S.HeroContainer>
  )
}
/*<Image
  src='/imgs/logo.png'
  width={220}
  height={28}
  alt='logo'
  layout='intrinsic'
/> */
