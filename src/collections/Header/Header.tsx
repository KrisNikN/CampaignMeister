import * as S from './elements';
import { useState, useEffect } from 'react';
import type { HTMLHeaderProps } from 'types';
import { LoginProps, RegisterProps } from 'collections/PopUps';
import { useSession, signOut } from 'next-auth/react';

export interface HeaderProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  loginButtonText: string;
  registerButtonText: string;
  signOutButtonText: string;
  loginPopupProps: LoginProps;
  registerPopupProps: RegisterProps;
}

export const Header = ({
  image,
  loginButtonText: buttonText1,
  registerButtonText: buttonText2,
  registerPopupProps,
  signOutButtonText,
  loginPopupProps,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setOpenRegister(false);
      setOpenLogin(false);
    }
  }, [session]);

  const handleLoginClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpenLogin(true);
  };

  const handleRegisterClick: React.MouseEventHandler<HTMLButtonElement> = (
    e,
  ) => {
    e.preventDefault();
    setOpenRegister(true);
  };

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    await signOut();
  };

  return (
    <>
      <S.Header {...props}>
        <S.HeaderContainer>
          <S.ImageContainer>
            <S.Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              layout='intrinsic'
            />
          </S.ImageContainer>

          {session ? (
            <S.Button onClick={handleSignOut}>{signOutButtonText}</S.Button>
          ) : (
            <S.ButtonsContainer>
              <S.Button onClick={handleLoginClick}>{buttonText1}</S.Button>
              <S.Button onClick={handleRegisterClick}>{buttonText2}</S.Button>
            </S.ButtonsContainer>
          )}
        </S.HeaderContainer>
      </S.Header>
      {openRegister && (
        <S.Register setOpenRegister={setOpenRegister} {...registerPopupProps} />
      )}
      {openLogin && (
        <S.Login setOpenLogin={setOpenLogin} {...loginPopupProps} />
      )}
    </>
  );
};
