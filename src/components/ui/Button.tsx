import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export const Button = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`outline-offset-2 outline-border-focused focus:outline focus:outline-2 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};
