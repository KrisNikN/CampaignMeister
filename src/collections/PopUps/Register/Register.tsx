import * as S from './elements';

interface RegisterProps {
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Register = ({ setOpenRegister }: RegisterProps) => {
  const handleContainerClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
    setOpenRegister(false);
  };

  const handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
    e,
  ) => {
    if (e.key === 'Enter') {
      handleContainerClick(e);
    }
  };

  return (
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
          <S.H2>Register</S.H2>
          <S.Input placeholder='Enter email' name='email' type='email' />
          <S.Input
            placeholder='Enter password'
            name='password'
            type='password'
          />
          <S.Input
            placeholder='Confirm password'
            name='confirmPassword'
            type='password'
          />
          <S.Button variant='dark'>Register</S.Button>
        </S.formContainer>
      </div>
    </S.Overlay>
  );
};
