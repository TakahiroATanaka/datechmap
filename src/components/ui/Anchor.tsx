import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = {
  unstyle?: boolean;
} & ComponentProps<'a'>;

export const Anchor = (props: Props) => {
  const { children, className, unstyle, target, href, id, ...rest } = props;

  const style = unstyle ? `` : `text-link underline`;
  const rel = target === '_blank' ? 'noopener noreferrer' : rest.rel;

  return (
    <Link
      className={`outline-offset-2 outline-border-focused focus:outline focus:outline-2 ${style} ${className ?? ''}`}
      href={href ?? '#'}
      id={id}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
};
