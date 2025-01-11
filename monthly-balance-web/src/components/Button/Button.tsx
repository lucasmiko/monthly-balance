import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

type ButtonProps = MUIButtonProps & {
  tailwindClass?: string;
};

const Button: React.FC<ButtonProps> = ({ children, tailwindClass, ...props }) => {
  return (
    <MUIButton
      className={`rounded-md px-4 py-2 text-white transition-all hover:bg-secondary ${tailwindClass}`}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;