import React from 'react';

// when passing custom className, add a leading whitespace first (e.g " mt-3")
// because it concats with defaults

interface ButtonProps {
  color: string;
  bg: string;
  children?: React.ReactNode;
  border: string;
  radius: string;
  className: string;
  width: string;
  height: string;
  onClick: () => void;
}

const btnDefault = 'font-semibold px-5 py-5 focus:outline-none';
const textWhite = '#fff';
const rounded = '15px';
const bgDefault = '#333a64';

const Button: React.FC<ButtonProps> = ({
  color,
  bg,
  children,
  border,
  radius,
  className,
  width,
  height,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={className ? btnDefault + className : btnDefault}
      style={{
        backgroundColor: bg ? bg : bgDefault,
        border,
        borderRadius: radius ? radius : rounded,
        color: color ? color : textWhite,
        width,
        height,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
