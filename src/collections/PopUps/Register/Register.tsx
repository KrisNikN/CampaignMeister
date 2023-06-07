import * as S from './elements';
import { RegisterFormProps } from 'collections/Forms';

interface RegisterProps {
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
  formProps: RegisterFormProps;
}

export const Register = ({ setOpenRegister, formProps }: RegisterProps) => {
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
        <S.RegisterForm {...formProps} />
      </div>
    </S.Overlay>
  );
};
