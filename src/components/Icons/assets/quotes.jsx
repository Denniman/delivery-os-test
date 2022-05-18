import React from 'react';

const Quotes = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.2 5.455H7.6a1.4 1.4 0 0 0-1.4 1.4v11.2a1.4 1.4 0 0 0 1.4 1.4H16a1.4 1.4 0 0 0 1.4-1.4v-8.4l-4.2-4.2ZM14.6 15.955H9M14.6 13.155H9M10.4 10.355H9"
        stroke={color || '#78797A'}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 5.455v4.2h4.2"
        stroke={color || '#78797A'}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Quotes;
