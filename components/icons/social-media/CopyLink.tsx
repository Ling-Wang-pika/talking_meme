import React from "react";

function CopyLink(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <rect width="28" height="28" fill="#fff" fillOpacity="0.1" rx="14"></rect>
      <g clipPath="url(#clip0_12320_41659)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.666 16.667c-.733 0-1.333-.6-1.333-1.334V8.667c0-.734.6-1.334 1.333-1.334h6.667c.733 0 1.333.6 1.333 1.334m-4 2.666h6.667c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334h-6.667a1.333 1.333 0 01-1.333-1.334v-6.666c0-.737.597-1.334 1.333-1.334z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_12320_41659">
          <path fill="#fff" d="M0 0H16V16H0z" transform="translate(6 6)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CopyLink;
