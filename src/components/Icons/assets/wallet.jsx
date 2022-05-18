import React from 'react';

const Wallet = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.9 8.955h-.7v-.7a2.1 2.1 0 0 0-2.1-2.1h-7a2.1 2.1 0 0 0-2.1 2.1v8.4a2.1 2.1 0 0 0 2.1 2.1h9.8a2.1 2.1 0 0 0 2.1-2.1v-5.6a2.1 2.1 0 0 0-2.1-2.1Zm-9.8-1.4h7a.7.7 0 0 1 .7.7v.7H7.1a.7.7 0 0 1 0-1.4Zm10.5 7h-.7a.7.7 0 0 1 0-1.4h.7v1.4Zm0-2.8h-.7a2.1 2.1 0 0 0 0 4.2h.7v.7a.7.7 0 0 1-.7.7H7.1a.7.7 0 0 1-.7-.7v-6.42c.225.08.462.12.7.12h9.8a.7.7 0 0 1 .7.7v.7Z"
        fill={color || '#78797A'}
      />
    </svg>
  );
};

export default Wallet;
