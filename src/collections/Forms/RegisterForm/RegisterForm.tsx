import { useZodForm } from 'hooks';
import * as S from './elements';
import { registerSchema } from 'schemas';

export interface RegisterFormProps {
  title: string;
  emailInputText: string;
  passwordInputText: string;
  confirmPasswordInputText: string;
  buttonText: string;
}

export const RegisterForm = ({
  buttonText,
  confirmPasswordInputText,
  emailInputText,
  passwordInputText,
  title,
  ...props
}: RegisterFormProps) => {
  const { control, handleSubmit } = useZodForm(registerSchema, {
    email: '',
    password: '',
    confirmPassword: '',
  });

  const submitHandler = handleSubmit(({ confirmPassword, email, password }) => {
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  });

  return (
    <S.formContainer {...props} onSubmit={submitHandler}>
      <S.H2>{title}</S.H2>
      <S.Input
        control={control}
        placeholder={emailInputText}
        name='email'
        type='email'
      />
      <S.Input
        control={control}
        placeholder={passwordInputText}
        name='password'
        type='password'
      />
      <S.Input
        control={control}
        placeholder={confirmPasswordInputText}
        name='confirmPassword'
        type='password'
      />
      <S.Button variant='dark' type='submit'>
        {buttonText}
      </S.Button>
    </S.formContainer>
  );
};
