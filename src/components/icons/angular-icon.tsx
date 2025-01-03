import type { SVGProps } from 'react';

export function AngularIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <defs>
        <linearGradient id='angularGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: '#DD0031', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: '#C3002F', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <path
        fill='url(#angularGradient)'
        d='m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05zm1.62 7.9h-3.23L12 8.63z'
      ></path>
    </svg>
  );
}
