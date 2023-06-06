import * as S from './elements';

interface LoginProps {
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login = ({ setOpenLogin }: LoginProps) => {
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
          <S.formContainer>
            <S.H2>Login</S.H2>
            <S.Input name='email' type='email' placeholder='Enter email' />
            <S.Input
              name='password'
              type='password'
              placeholder='Enter password'
            />
            <S.Button variant='dark'>Confirm</S.Button>
          </S.formContainer>
        </div>
      </S.Overlay>
    </>
  );
};
