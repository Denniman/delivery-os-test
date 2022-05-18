import React from 'react';

const Card = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 10.505a.7.7 0 1 0 0 1.4v-1.4Zm13.75 1.4a.7.7 0 1 0 0-1.4v1.4Zm-12.5-3.75H17.5v-1.4H6.25v1.4Zm11.25 0a.55.55 0 0 1 .55.55h1.4a1.95 1.95 0 0 0-1.95-1.95v1.4Zm.55.55v7.5h1.4v-7.5h-1.4Zm0 7.5a.55.55 0 0 1-.55.55v1.4a1.95 1.95 0 0 0 1.95-1.95h-1.4Zm-.55.55H6.25v1.4H17.5v-1.4Zm-11.25 0a.55.55 0 0 1-.55-.55H4.3a1.95 1.95 0 0 0 1.95 1.95v-1.4Zm-.55-.55v-7.5H4.3v7.5h1.4Zm0-7.5a.55.55 0 0 1 .55-.55v-1.4a1.95 1.95 0 0 0-1.95 1.95h1.4Zm-.7 3.2h13.75v-1.4H5v1.4Z"
        fill={color || '#78797A'}
      />
    </svg>
  );
};

export default Card;
