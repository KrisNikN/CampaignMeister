import * as S from './elements';
import { useState } from 'react';
import type { HTMLHeaderProps } from 'types';
import { RegisterFormProps, LoginFormProps } from 'collections/Forms';

export interface HeaderProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  buttonText1: string;
  buttonText2: string;
  forms: [RegisterFormProps, LoginFormProps];
}

export const Header = ({
  image,
  buttonText1,
  buttonText2,
  forms,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

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

          <S.ButtonsContainer>
            <S.Button onClick={handleLoginClick}>{buttonText1}</S.Button>
            <S.Button onClick={handleRegisterClick}>{buttonText2}</S.Button>
          </S.ButtonsContainer>
        </S.HeaderContainer>
      </S.Header>
      {openRegister && (
        <S.Register setOpenRegister={setOpenRegister} formProps={forms[0]} />
      )}
      {openLogin && (
        <S.Login setOpenLogin={setOpenLogin} formProps={forms[1]} />
      )}
    </>
  );
};
