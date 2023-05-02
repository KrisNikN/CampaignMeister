import * as S from './elements'

export const Diagram = ({ ...props }) => {
  return (
    <S.SectionContainer {...props}>
      <S.TitleContainer>
        How to <S.YellowStyling>boost your performance </S.YellowStyling>
        with flawless data
      </S.TitleContainer>

      <S.ElementContainer>
        <S.ParagraphsContainer>
          <S.Paragraph>
            Optimizing campaigns is hard, especially across all your channels,
            brands and agencies. Campaign-Meister ensures you and your team have
            all the insights to boost your campaign performance.
          </S.Paragraph>
          <S.Paragraph>
            Optimizing campaigns is hard, especially across all your channels,
            brands and agencies. Campaign-Meister ensures you and your team have
            all the insights to boost your campaign performance. Optimizing
            campaigns is hard, especially across all your channels, brands and
            agencies.
          </S.Paragraph>
        </S.ParagraphsContainer>
      </S.ElementContainer>
      <S.ContainerBig>
        <S.DiagramContainer variant='column'>
          <S.DiagramBlock>
            <S.TitleSecond>Smart Start</S.TitleSecond>
            <S.Paragraph>
              Use all your historic data to predict your Campaign Success
              Probability so you can optimise on it upfront.
            </S.Paragraph>
          </S.DiagramBlock>
          <S.ImageContainer>
            <S.Image
              src='/imgs/mobilePlay.png'
              width={102.03}
              height={102.03}
              alt='Play Image'
              layout='intrinsic'
            />
          </S.ImageContainer>
          <S.Image
            src='/imgs/diagram.png'
            width={702}
            height={571.35}
            alt='Diagram Image'
            layout='intrinsic'
          />
        </S.DiagramContainer>

        <S.DiagramContainer variant='row'>
          <S.ImageContainer>
            <S.Image
              src='/imgs/mobilePlain.png'
              width={102.03}
              height={102.03}
              alt='Play Image'
              layout='intrinsic'
            />
          </S.ImageContainer>
          <S.DiagramBlock>
            <S.TitleSecond>Smart Learning</S.TitleSecond>
            <S.Paragraph>
              Gain advanced insights by combining campaign attribution,
              marketing mix modeling and learnings from validated experiments.
            </S.Paragraph>
          </S.DiagramBlock>
          <S.ImageContainer>
            <S.Image
              src='/imgs/mobileBook.png'
              width={102.03}
              height={102.03}
              alt='Play Image'
              layout='intrinsic'
            />
          </S.ImageContainer>
          <S.DiagramBlock>
            <S.TitleSecond>Smart Flight</S.TitleSecond>
            <S.Paragraph>
              Compare campaign tactics across all channels in real-time and
              proceed with your winning tactics.
            </S.Paragraph>
          </S.DiagramBlock>
        </S.DiagramContainer>
      </S.ContainerBig>
    </S.SectionContainer>
  )
}
