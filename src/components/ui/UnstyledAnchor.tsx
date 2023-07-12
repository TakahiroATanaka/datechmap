import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;

export const UnstyledAnchor = (props: Props) => {
  const { children, className, target, href, id, ...rest } = props;

  const rel = target === '_blank' ? 'noopener noreferrer' : rest.rel;

  return (
    <Link
      aria-label={rest['aria-label'] ?? undefined}
      className={`outline-border-focused focus:outline focus:outline-2 ${className ?? ''}`}
      href={href ?? '#'}
      id={id}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
};
