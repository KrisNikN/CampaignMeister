import * as S from './elements';
import { signOut, useSession } from 'next-auth/react';
import { useRef, useEffect } from 'react';

export interface UserDropDownProps {
  title: string;
  signOutButtonText: string;
}

interface HooksProps {
  setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  openDropDown: boolean;
}

export const UserDropDown = ({
  setOpenDropDown,
  signOutButtonText,
  title,
  openDropDown,
  ...props
}: UserDropDownProps & HooksProps) => {
  const { data: session } = useSession();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        e.target instanceof Node &&
        dropRef.current &&
        !dropRef.current.contains(e.target)
      ) {
        setOpenDropDown(false);
      }
    };

    if (openDropDown) {
      window.addEventListener('pointerup', handleClickOutside);
    }

    return () => {
      window.removeEventListener('pointerup', handleClickOutside);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    await signOut();
  };

  return (
    <S.DropDown ref={dropRef} {...props}>
      <S.H2>{title}</S.H2>
      <S.Paragraph>email: {session?.user?.email}</S.Paragraph>
      {session?.user?.name && (
        <S.Paragraph>name: {session?.user?.name}</S.Paragraph>
      )}
      <S.Button variant='dark' onClick={handleSignOut}>
        {signOutButtonText}
      </S.Button>
    </S.DropDown>
  );
};
