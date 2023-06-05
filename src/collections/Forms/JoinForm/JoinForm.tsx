import * as S from './elements';

export interface JoinFormProps {
  title: string;
  inputPlaceholder: string;
  buttonText: string;
  checkboxes: { text: string }[];
}

export const JoinForm = ({
  title,
  inputPlaceholder,
  buttonText,
  checkboxes,
  ...props
}: JoinFormProps) => {
  return (
    <S.JoinForm {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.InputsContainer>
        <S.Input variant='' placeholder={inputPlaceholder} />
        <S.Button variant='yellow'>{buttonText}</S.Button>
      </S.InputsContainer>
      <S.CheckBoxsContainer>
        <S.CheckBoxContainer>
          <S.CheckBox />
          <S.SmallParagraph
            dangerouslySetInnerHTML={{ __html: checkboxes[0].text }}
          />
        </S.CheckBoxContainer>
        <S.CheckBoxContainer>
          <S.CheckBox />
          <S.SmallParagraph
            dangerouslySetInnerHTML={{ __html: checkboxes[1].text }}
          />
        </S.CheckBoxContainer>
      </S.CheckBoxsContainer>
    </S.JoinForm>
  );
};
