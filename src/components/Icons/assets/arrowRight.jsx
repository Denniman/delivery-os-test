import React from 'react';

const ArrowRight = ({ color, ...props }) => {
  return (
    <svg width={17} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.078 4.354a.5.5 0 0 0 0-.708L12.896.464a.5.5 0 1 0-.707.708L15.018 4l-2.829 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM.163 4.5h15.562v-1H.163v1Z"
        fill="#000"
      />
    </svg>
  );
};

export default ArrowRight;
