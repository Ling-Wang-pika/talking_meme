import React from "react";

function LinkedIn(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <circle cx={14} cy={14} r={14} fill="#fff" />
        <path
          fill="#2D64BC"
          d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0Zm-3.427 19.803H7.738v-9.124h2.835v9.124ZM9.138 9.559c-.896 0-1.474-.634-1.474-1.419 0-.8.596-1.416 1.51-1.416.915 0 1.475.616 1.492 1.416 0 .785-.577 1.42-1.528 1.42Zm11.79 10.244h-2.836v-5.056c0-1.177-.411-1.976-1.436-1.976-.783 0-1.249.54-1.454 1.061-.076.185-.095.448-.095.709v5.26H12.27V13.59a60.84 60.84 0 0 0-.074-2.911h2.463l.13 1.267h.057c.373-.595 1.288-1.473 2.817-1.473 1.866 0 3.264 1.25 3.264 3.936v5.395Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedIn;
