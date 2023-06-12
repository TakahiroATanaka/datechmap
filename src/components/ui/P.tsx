import { ComponentProps } from 'react';

type Props = ComponentProps<'p'>;

export const P = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-body-lg text-body ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};
