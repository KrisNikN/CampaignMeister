import * as S from './elements'

export const TitleContainer = ({ children, ...props }) => {
  return (
    <S.TitleContainer {...props}>
      <S.TitleMain>{children} </S.TitleMain>
    </S.TitleContainer>
  )
}
