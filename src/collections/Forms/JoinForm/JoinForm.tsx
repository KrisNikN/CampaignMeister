import { useZodForm } from 'hooks';
import * as S from './elements';
import { joinWaitListSchema, JoinWaitListFormValues } from 'schemas';

export interface JoinFormProps {
  title: string;
  inputPlaceholder: string;
  buttonText: string;
  checkboxes: string[];
}

export const JoinForm = ({
  title,
  inputPlaceholder,
  buttonText,
  checkboxes,
  ...props
}: JoinFormProps) => {
  const { control, handleSubmit, formState } = useZodForm(joinWaitListSchema, {
    agreeToTOS: false,
    newsLetter: false,
    email: '',
  });

  const submitHandler = handleSubmit(({ email, agreeToTOS, newsLetter }) => {
    console.log(email);
    console.log(agreeToTOS);
    console.log(newsLetter);
  });

  return (
    <S.JoinForm {...props} onSubmit={submitHandler}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.InputsContainer>
        <S.Input
          control={control}
          name='email'
          variant=''
          placeholder={inputPlaceholder}
        />
        <S.Button variant='yellow' type='submit'>
          {buttonText}
        </S.Button>
      </S.InputsContainer>
      <S.CheckBoxsContainer>
        <S.CheckBoxContainer>
          <S.CheckBox control={control} name='agreeToTOS' />
          <S.SmallParagraph
            dangerouslySetInnerHTML={{ __html: checkboxes[0] }}
          />
        </S.CheckBoxContainer>
        <S.CheckBoxContainer>
          <S.CheckBox control={control} name='newsLetter' />
          <S.SmallParagraph
            dangerouslySetInnerHTML={{ __html: checkboxes[1] }}
          />
        </S.CheckBoxContainer>
      </S.CheckBoxsContainer>
    </S.JoinForm>
  );
};
