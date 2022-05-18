import React from 'react';

const Bookings = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.5 5H9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h7.5a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 16.5 5Zm-9 3A1.5 1.5 0 0 1 9 6.5h7.5V14H9a2.933 2.933 0 0 0-1.5.42V8ZM9 18.5a1.5 1.5 0 1 1 0-3h7.5v3H9Zm1.5-9h3a.75.75 0 1 0 0-1.5h-3a.75.75 0 1 0 0 1.5Z"
        fill={color || '#78797A'}
      />
    </svg>
  );
};

export default Bookings;
