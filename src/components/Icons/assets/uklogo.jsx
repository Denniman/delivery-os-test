import React from 'react';

const UkLogo = ({ color, ...props }) => {
  return (
    <svg width={32} height={33} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect y={0.5} width={32} height={32} rx={8} fill="#303030" />
      <path
        d="M10.113 22.545c-1.201 0-2.187-.339-2.958-1.016C6.385 20.85 6 19.942 6 18.802v-7.257h2.11v7.087c0 .575.165 1.027.494 1.356.339.318.842.478 1.51.478.667 0 1.165-.16 1.494-.478.339-.329.508-.78.508-1.356v-7.087h2.126v7.257c0 1.14-.385 2.049-1.155 2.727-.77.677-1.762 1.016-2.974 1.016ZM21.678 16.784l4.145 5.546h-2.45l-3.851-5.053v5.053h-2.126V11.545h2.126v4.76l3.697-4.76h2.45l-3.99 5.239Z"
        fill="#fff"
      />
      <path
        d="M10.113 22.545c-1.201 0-2.187-.339-2.958-1.016C6.385 20.85 6 19.942 6 18.802v-7.257h2.11v7.087c0 .575.165 1.027.494 1.356.339.318.842.478 1.51.478.667 0 1.165-.16 1.494-.478.339-.329.508-.78.508-1.356v-7.087h2.126v7.257c0 1.14-.385 2.049-1.155 2.727-.77.677-1.762 1.016-2.974 1.016ZM21.678 16.784l4.145 5.546h-2.45l-3.851-5.053v5.053h-2.126V11.545h2.126v4.76l3.697-4.76h2.45l-3.99 5.239Z"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </svg>
  );
};

export default UkLogo;