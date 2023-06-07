import * as S from './elements';
import { LoginFormProps } from 'collections/Forms';

interface LoginProps {
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  formProps: LoginFormProps;
}

export const Login = ({ setOpenLogin, formProps }: LoginProps) => {
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
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          role='presentation'
        >
          <S.LoginForm {...formProps} />
        </div>
      </S.Overlay>
    </>
  );
};
