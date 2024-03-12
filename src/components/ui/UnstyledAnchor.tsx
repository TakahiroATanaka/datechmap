import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;

export const UnstyledAnchor = (props: Props) => {
  const { children, className, target, href, id, ...rest } = props;

  const rel = target === '_blank' ? 'noopener noreferrer' : rest.rel;

  return (
    <Link
      aria-label={rest['aria-label'] ?? undefined}
      className={`outline-border-focused text-black no-underline hover:font-bold hover:text-link hover:no-underline ${className ?? ''}`}
      href={href ?? '#'}
      id={id}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
};
