import { HeaderProps } from 'collections';
import { registerFormProps } from './registerFormProps';
import { loginFormProps } from './loginFormProps';

export const headerProps: HeaderProps = {
  image: {
    src: '/imgs/logo.png',
    width: 220,
    height: 28,
    alt: 'logo',
  },
  buttonText1: 'Login',
  buttonText2: 'Register',
  forms: [registerFormProps, loginFormProps],
};
