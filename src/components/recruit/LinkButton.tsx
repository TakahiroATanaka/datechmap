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
      className={`rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] hover:bg-sumi-50 focus:border-transparent active:bg-sumi-50 ${
        props.className ?? ''
      }`}
      href={props.path}
    >
      {props.children}
    </UnstyledAnchor>
  );
};
