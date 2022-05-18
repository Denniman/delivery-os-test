import React from 'react';

const Notification = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.777 15.666c-.864-1.057-1.474-1.596-1.474-4.512 0-2.67-1.364-3.622-2.486-4.084a.6.6 0 0 1-.335-.355c-.197-.67-.748-1.26-1.482-1.26s-1.286.59-1.48 1.26a.594.594 0 0 1-.336.355c-1.123.463-2.486 1.41-2.486 4.084-.001 2.916-.612 3.455-1.476 4.512-.358.439-.044 1.096.582 1.096h10.395c.623 0 .935-.66.578-1.096ZM14.154 16.762v.539a2.154 2.154 0 0 1-4.308 0v-.539"
        stroke={color || '#78797A'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Notification;
