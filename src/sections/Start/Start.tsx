import * as S from './elements'

export const Start = ({ ...props }) => {
  return (
    <S.SectionContainer>
      <S.TitleContainer>
        <S.ImageContainer>
          <S.Image src='/imgs/lines.png' width={88.47} height={373.24} />
        </S.ImageContainer>
        <S.YellowStyling>Start</S.YellowStyling> optimising
        <S.YellowStyling> now</S.YellowStyling>
      </S.TitleContainer>
      <S.JoinForm />
    </S.SectionContainer>
  )
}
