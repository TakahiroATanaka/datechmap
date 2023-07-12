import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;

export const Anchor = (props: Props) => {
  const { children, className, target, href, id, ...rest } = props;

  const rel = target === '_blank' ? 'noopener noreferrer' : rest.rel;

  return (
    <Link
      aria-label={rest['aria-label'] ?? undefined}
      className={`text-anchor text-link underline outline-offset-2 outline-border-focused focus:outline focus:outline-2 ${
        className ?? ''
      }`}
      href={href ?? '#'}
      id={id}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
};
