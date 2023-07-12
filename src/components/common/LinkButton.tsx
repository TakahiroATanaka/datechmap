import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  path: string;
  className?: string;
};

export const LinkButton = (props: Props) => {
  return (
    <UnstyledAnchor
      className={`
        h-14 rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button text-button-secondary-normal hover:bg-button-secondary-hover focus:border-transparent
        ${props.className}
      `}
      href={props.path}
    >
      {props.children}
    </UnstyledAnchor>
  );
};
