import { useZodForm } from 'hooks';
import * as S from './elements';
import { registerFormSchema } from 'schemas';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { useState } from 'react';
import { redirect } from 'next/dist/server/api-utils';

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
  const [hasError, sethasError] = useState<boolean>(false);
  const { control, handleSubmit } = useZodForm(registerFormSchema, {
    email: '',
    password: '',
    confirmPassword: '',
  });

  const submitHandler = handleSubmit(async ({ email, password }) => {
    try {
      const response = await axios.post('/api/auth/register', {
        email,
        password,
      });

      if (response.status === 200) {
        await signIn('credentials', {
          email,
          password,
          redirect: false,
        });
        sethasError(false);
      } // Registration successful
    } catch (error: any) {
      // console.log('Registration error:', error);
      sethasError(true);
    }
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
      {hasError && <S.ErrorP>User already exist</S.ErrorP>}
    </S.formContainer>
  );
};
