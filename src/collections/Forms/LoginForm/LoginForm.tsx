import { useZodForm } from 'hooks';
import * as S from './elements';
import { loginSchema } from 'schemas';
import { signIn, useSession } from 'next-auth/react';

export interface LoginFormProps {
  title: string;
  emailInputText: string;
  passwordInputText: string;
  buttonText: string;
}

export const LoginForm = ({
  title,
  emailInputText,
  buttonText,
  passwordInputText,
  ...props
}: LoginFormProps) => {
  const { control, handleSubmit } = useZodForm(loginSchema, {
    email: '',
    password: '',
  });

  const submitHandler = handleSubmit(async ({ email, password }) => {
    try {
      const user = await signIn('credentials', {
        email,
        password,
        action: 'login',
        redirect: false,
      });

      console.log('login successful');

      console.log(user);
    } catch (error) {
      // Handle registration error
      console.error('login failed:', error);
    }
  });

  return (
    <S.formContainer {...props} onSubmit={submitHandler}>
      <S.H2>{title}</S.H2>
      <S.Input
        control={control}
        name='email'
        type='email'
        placeholder={emailInputText}
      />
      <S.Input
        control={control}
        name='password'
        type='password'
        placeholder={passwordInputText}
      />
      <S.Button variant='dark' type='submit'>
        {buttonText}
      </S.Button>
    </S.formContainer>
  );
};
