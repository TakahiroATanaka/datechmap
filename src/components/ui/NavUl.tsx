import { ComponentProps } from 'react';

type Props = ComponentProps<'ul'>;

export const NavUl = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <ul className={`list-none ${className ?? ''}`} {...rest}>
      {children}
    </ul>
  );
};
