import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  size?: 'small' | 'normal';
  color?: 'primary' | 'secondary';
  loading?: boolean;
}

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button {...props} className="">
    {children}
  </button>
);

export default Button;
