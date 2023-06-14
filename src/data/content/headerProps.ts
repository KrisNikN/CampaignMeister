import { HeaderProps } from 'collections';

import { registerPopupProps } from './registerPopupProps';
import { loginPopupProps } from './loginPopupProps';

export const headerProps: HeaderProps = {
  image: {
    src: '/imgs/logo.png',
    width: 220,
    height: 28,
    alt: 'logo',
  },
  loginButtonText: 'Login',
  registerButtonText: 'Register',
  signOutButtonText: 'Sign out',
  loginPopupProps: loginPopupProps,
  registerPopupProps: registerPopupProps,
};
