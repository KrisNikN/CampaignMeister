import * as S from './elements';
import { LoginFormProps } from 'collections/Forms';
import { useSession, signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

export interface LoginProps {
  paragraphText: string;
  googleButtonText: string;
  discordButtonText: string;
}

interface HooksProps {
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  formProps: LoginFormProps;
}

export const Login = ({
  setOpenLogin,
  formProps,
  paragraphText,
  googleButtonText,
  discordButtonText,
}: LoginProps & HooksProps) => {
  const handleContainerClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
    setOpenLogin(false);
  };

  const handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
    e,
  ) => {
    if (e.key === 'Enter') {
      handleContainerClick(e);
    }
  };

  return (
    <>
      <S.Overlay
        onClick={handleContainerClick}
        onKeyDown={handleContainerKeyDown}
        role='button'
        tabIndex={0}
      >
        <S.formContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
          role='presentation'
        >
          <S.LoginForm {...formProps} />
          <S.Paragraph>{paragraphText}</S.Paragraph>
          <S.Button
            variant='dark'
            onClick={() => {
              signIn('google');
            }}
          >
            {googleButtonText}
          </S.Button>
          <S.Button
            variant='dark'
            onClick={() => {
              signIn('discord');
            }}
          >
            {discordButtonText}
          </S.Button>
        </S.formContainer>
      </S.Overlay>
    </>
  );
};
