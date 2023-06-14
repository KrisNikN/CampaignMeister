import { useZodForm } from 'hooks';
import * as S from './elements';
import { loginFormSchema } from 'schemas';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';

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
  const [hasError, setHasError] = useState<boolean>(false);
  const [nError, setError] = useState<string>('');
  const { control, handleSubmit } = useZodForm(loginFormSchema, {
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

      if (user?.error) {
        if (
          user?.error ===
          'FirebaseError: Firebase: Error (auth/wrong-password).'
        ) {
          throw new Error('Wrong password');
        } else if (
          user?.error ===
          'FirebaseError: Firebase: Error (auth/user-not-found).'
        ) {
          throw new Error("Such user doesn't exist ");
        }
        throw new Error('Authentication failed');
      }
    } catch (error: any) {
      setHasError(true);
      setError(error.message);
    }
  });

  return (
    <S.FormContainer {...props} onSubmit={submitHandler}>
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
      {hasError && <S.ErrorP>{nError}</S.ErrorP>}
    </S.FormContainer>
  );
};
