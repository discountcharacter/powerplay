import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 6.5V12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12V6.5L12 2Z"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="hsl(var(--secondary))"
      />
      <g
        transform="translate(4 4) scale(0.66)"
        className="stroke-secondary-foreground"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M5 19L14 10" />
        <path d="M19 5L10 14" />
      </g>
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="hsl(var(--primary))"
        className="stroke-primary-foreground"
        strokeWidth="1"
      />
    </svg>
  );
}
