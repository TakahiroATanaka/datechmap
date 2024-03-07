import React, { ComponentProps } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

// export const buttonBaseStyle = `group w-full outline-2 outline-offset-2 focus:outline focus:outline-focused`
export const buttonBaseStyle = `group outline-2 outline-offset-2 focus:outline focus:outline-focused`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  primary: `
    bg-button-primary-normal
    text-button-primary-normal
    focus:underline
    hover:bg-button-primary-hover
    hover:text-button-primary-hover
    hover:underline
    active:text-button-primary-active
    active:bg-button-primary-active
    active:underline
    disabled:bg-button-primary-disabled
    disabled:no-underline
  `,
  secondary: `
    border
    bg-button-secondary-normal
    border-button-secondary-normal
    text-button-secondary-normal
    focus:border-transparent
    focus:underline
    hover:bg-button-secondary-hover
    hover:border-button-secondary-hover
    hover:text-button-secondary-hover
    hover:underline
    active:bg-button-secondary-active
    active:border-button-secondary-active
    active:text-button-secondary-active
    active:underline
    disabled:bg-button-secondary-disabled
    disabled:border-button-secondary-disabled
    disabled:text-button-secondary-disabled
    disabled:no-underline
  `,
  tertiary: `
    underline
    bg-button-tertiary-normal
    text-button-tertiary-normal
    hover:bg-button-tertiary-hover
    hover:text-button-tertiary-hover
    active:bg-button-tertiary-active
    active:text-button-tertiary-active
    disabled:bg-button-tertiary-disabled
    disabled:text-button-tertiary-disabled
    disabled:no-underline
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: `p-4 text-button rounded-8 min-w-[136px]`,
  md: `px-4 text-button py-3 rounded-8 min-w-[96px]`,
  sm: `px-3 text-button py-[6px] rounded-[6px] min-w-[80px]`,
  xs: `px-2 text-button-xs py-[7px] rounded-[4px] min-w-[72px]`,
};

export type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size: ButtonSize;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, variant, size, ...rest } = props;

  return (
    <button
      className={`${buttonBaseStyle} ${buttonSizeStyle[size]} ${variant ? buttonVariantStyle[variant] : ''} ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
