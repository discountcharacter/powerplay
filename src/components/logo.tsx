import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 19.5L50 2.5L91.5 19.5V47C91.5 73 50 97.5 50 97.5C50 97.5 8.5 73 8.5 47V19.5Z"
        fill="#003366"
        stroke="#002244"
        strokeWidth="2"
      />
      <path
        d="M8.5 47V19.5L50 2.5L91.5 19.5V47H8.5Z"
        fill="#005A9C"
        stroke="#002244"
        strokeWidth="2"
      />
      <path
        d="M8.5 47H91.5L78 68H22L8.5 47Z"
        fill="#3D9949"
        stroke="#2A6B3A"
        strokeWidth="2"
      />
      <path
        d="M33 3.5L40 28L20 40Z"
        fill="#F9A825"
        stroke="#C78400"
        strokeWidth="1.5"
      />
      <rect x="58" y="20" width="3" height="15" fill="white" />
      <rect x="64" y="20" width="3" height="15" fill="white" />
      <rect x="70" y="20" width="3" height="15" fill="white" />
      <path
        d="M78 30C60 35 45 40 30 45"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="80" cy="30" r="8" fill="#D35400" stroke="white" strokeWidth="1" />
      <text
        x="50"
        y="65"
        fontFamily="Poppins, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        PCA
      </text>
    </svg>
  );
}
