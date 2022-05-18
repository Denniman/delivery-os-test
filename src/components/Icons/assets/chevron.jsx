import React from 'react';

const Chevron = ({ ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#F2F4F7" d="M0 .5h24v24H0z" />
      <path
        d="m8 10.5 4 4 4-4"
        stroke="#A0AEC0"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
