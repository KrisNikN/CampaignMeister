import { useZodForm } from 'hooks';
import * as S from './elements';
import { registerSchema } from 'schemas';
import { signIn } from 'next-auth/react';

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

  const submitHandler = handleSubmit(async ({ email, password }) => {
    try {
      // Call the signIn function with the registration action
      await signIn('credentials', {
        email,
        password,
        action: 'register',
        redirect: false, // Prevent default redirect behavior
      });
      // Registration successful, you can redirect the user to a success page
      // or display a success message in the current page
      console.log('Registration successful');
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error);
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
    </S.formContainer>
  );
};
