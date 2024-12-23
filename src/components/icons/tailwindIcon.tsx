import React from 'react';
import type { SVGProps } from 'react';

export function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <defs>
        <linearGradient id='tailwindGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <path
        fill='url(#tailwindGradient)'
        d='M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12'
      ></path>
    </svg>
  );
}
