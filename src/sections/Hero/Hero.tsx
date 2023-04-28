import {
  HeroContainer,
  Image,
  YellowStyling,
  NormalHeading,
  ContainerText,
  DivElement,
  Paragraph,
  JoinForm,
} from './elements'

export const Hero = () => {
  return (
    <HeroContainer>
      <ContainerText>
        <DivElement>
          <NormalHeading>
            <YellowStyling>
              The ugly truth: Your campaign data are a mess.
            </YellowStyling>
            By fixing it, you can improve your campaign performance with over
            25%.
          </NormalHeading>
        </DivElement>

        <DivElement variant='gap'>
          <Paragraph>
            Optimising campaigns is hard, especially if you lack trustworthy
            data. Unfortunately this is the case for more than 65% of the
            companies.
          </Paragraph>
          <Paragraph>
            Boost your performance by fixing your data across all channels,
            brands and agencies.
          </Paragraph>
        </DivElement>
        <JoinForm />
      </ContainerText>

      <Image
        src='/imgs/HeroImage.png'
        width={773}
        height={605}
        alt='Hero Image'
        layout='intrinsic'
      />
    </HeroContainer>
  )
}
/*<Image
  src='/imgs/logo.png'
  width={220}
  height={28}
  alt='logo'
  layout='intrinsic'
/> */
