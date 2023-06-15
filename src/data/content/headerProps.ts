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
  defaultUserImage: {
    alt: 'Default user image',
    src: '/imgs/profile.png',
  },
  loginButtonText: 'Login',
  registerButtonText: 'Register',
  dropDownProps: {
    signOutButtonText: 'Sign out',
    title: 'User info',
  },
  loginPopupProps: loginPopupProps,
  registerPopupProps: registerPopupProps,
};
