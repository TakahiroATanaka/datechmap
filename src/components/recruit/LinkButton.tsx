import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  path: string;
};

export const LinkButton = (props: Props) => {
  return (
    <UnstyledAnchor
      className="rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] hover:bg-sumi-50 active:bg-sumi-50"
      href={props.path}
    >
      {props.children}
    </UnstyledAnchor>
  );
};
