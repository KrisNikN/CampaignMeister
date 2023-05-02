import * as S from './elements'

export const JoinForm = ({ ...props }) => {
  return (
    <S.JoinForm {...props}>
      <S.Paragraph>
        <S.YellowStyling>Join </S.YellowStyling>waiting list for access
      </S.Paragraph>
      <S.InputsContainer>
        <S.Input placeholder='Enter Email' />
        <S.Button variant='yellow'>Join</S.Button>
      </S.InputsContainer>
      <S.CheckBoxsContainer>
        <S.CheckBoxContainer>
          <S.CheckBox />
          <S.SmallParagraph>
            I agree to the <S.Link href='#'>Terms & Conditions </S.Link> and the
            <S.Link href='#'> Privacy Policy</S.Link>
          </S.SmallParagraph>
        </S.CheckBoxContainer>
        <S.CheckBoxContainer>
          <S.CheckBox />
          <S.SmallParagraph>
            I want to subsribe to the newsletter
          </S.SmallParagraph>
        </S.CheckBoxContainer>
      </S.CheckBoxsContainer>
    </S.JoinForm>
  )
}
