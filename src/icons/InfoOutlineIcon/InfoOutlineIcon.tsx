import React from 'react';

interface GreensparkIconProps extends React.SVGProps<SVGSVGElement> {}

export function InfoOutlineIcon({
  height,
  width,
  className,
  color,
  ...props
}: GreensparkIconProps) {
  return (
    <svg
      width={width || '12'}
      height={height || '13'}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 9.47363H6.5V6.47363H5.5V9.47363ZM6 1.97363C3.24 1.97363 1 4.21363 1 6.97363C1 9.73363 3.24 11.9736 6 11.9736C8.76 11.9736 11 9.73363 11 6.97363C11 4.21363 8.76 1.97363 6 1.97363ZM6 10.9736C3.795 10.9736 2 9.17863 2 6.97363C2 4.76863 3.795 2.97363 6 2.97363C8.205 2.97363 10 4.76863 10 6.97363C10 9.17863 8.205 10.9736 6 10.9736ZM5.5 5.47363H6.5V4.47363H5.5V5.47363Z"
        fill={color || '#3B755F'}
      />
      <path
        d="M5.5 4.47363H6.5V5.47363H5.5V4.47363ZM5.5 6.47363H6.5V9.47363H5.5V6.47363Z"
        fill={color || '#3B755F'}
      />
      <path
        d="M6 1.97363C3.24 1.97363 1 4.21363 1 6.97363C1 9.73363 3.24 11.9736 6 11.9736C8.76 11.9736 11 9.73363 11 6.97363C11 4.21363 8.76 1.97363 6 1.97363ZM6 10.9736C3.795 10.9736 2 9.17863 2 6.97363C2 4.76863 3.795 2.97363 6 2.97363C8.205 2.97363 10 4.76863 10 6.97363C10 9.17863 8.205 10.9736 6 10.9736Z"
        fill={color || '#3B755F'}
      />
    </svg>
  );
}
