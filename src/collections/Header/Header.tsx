import * as S from './elements';
import { useState, useEffect, useRef } from 'react';
import type { HTMLHeaderProps } from 'types';
import { LoginProps, RegisterProps } from 'collections/PopUps';
import { useSession } from 'next-auth/react';
import { UserDropDownProps } from 'collections/DropDowns';

export interface HeaderProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  defaultUserImage: {
    src: string;
    alt: string;
  };
  loginButtonText: string;
  registerButtonText: string;
  dropDownProps: UserDropDownProps;
  loginPopupProps: LoginProps;
  registerPopupProps: RegisterProps;
}

export const Header = ({
  image,
  loginButtonText,
  registerButtonText,
  registerPopupProps,
  dropDownProps,
  defaultUserImage,
  loginPopupProps,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const { data: session } = useSession();
  const imageRef = useRef<HTMLDivElement>(null);

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

  const handleUserImageClick: React.MouseEventHandler<HTMLImageElement> = (
    e,
  ) => {
    e.preventDefault();
    setOpenDropDown(!openDropDown);
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
            <>
              <S.UserImage
                src={session?.user?.image || defaultUserImage.src}
                width={64}
                height={64}
                alt={defaultUserImage.alt || 'User image'}
                layout='intrinsic'
                onClick={handleUserImageClick}
              />
            </>
          ) : (
            <S.ButtonsContainer>
              <S.Button onClick={handleLoginClick}>{loginButtonText}</S.Button>
              <S.Button onClick={handleRegisterClick}>
                {registerButtonText}
              </S.Button>
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
      {openDropDown && (
        <S.UserDropDown
          setOpenDropDown={setOpenDropDown}
          openDropDown={openDropDown}
          {...dropDownProps}
        />
      )}
    </>
  );
};
