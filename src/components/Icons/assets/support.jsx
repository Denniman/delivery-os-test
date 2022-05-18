import React from 'react';

const Support = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.061 12.048a.547.547 0 0 1-.547-.547V9.957c0-2.187-2.02-3.937-4.505-3.937S7.503 7.792 7.503 9.957v1.544a.547.547 0 1 1-1.093 0V9.957c0-2.782 2.515-5.048 5.599-5.048s5.599 2.266 5.599 5.048v1.544a.542.542 0 0 1-.547.547Z"
        fill="#78797A"
        stroke="#78797A"
        strokeWidth={0.4}
      />
      <path
        d="M15.582 17.192a.547.547 0 0 1-.546-.547v-5.192a.547.547 0 0 1 .546-.53c1.886 0 3.421 1.414 3.421 3.146s-1.535 3.123-3.42 3.123Zm.547-5.135v3.985a2.126 2.126 0 0 0 1.776-1.99 2.126 2.126 0 0 0-1.776-1.995Zm-7.712 5.135c-1.885 0-3.42-1.409-3.42-3.14 0-1.733 1.535-3.128 3.42-3.128a.547.547 0 0 1 .547.546v5.175a.547.547 0 0 1-.546.547Zm-.546-5.135a2.126 2.126 0 0 0-1.776 1.994 2.126 2.126 0 0 0 1.776 1.99v-3.984Z"
        fill="#78797A"
        stroke="#78797A"
        strokeWidth={0.4}
      />
      <path
        d="M15.403 18.972h-1.81a.546.546 0 1 1 0-1.093h1.81a1.067 1.067 0 0 0 1.068-1.068v-.24a.547.547 0 1 1 1.093 0v.24a2.16 2.16 0 0 1-2.16 2.161Z"
        fill="#78797A"
        stroke="#78797A"
        strokeWidth={0.4}
      />
      <path
        d="M12.656 20h-1.08a1.496 1.496 0 0 1-1.496-1.496v-.061a1.496 1.496 0 0 1 1.496-1.492h1.08a1.491 1.491 0 0 1 1.492 1.492v.061A1.496 1.496 0 0 1 12.656 20Zm-1.072-1.955a.402.402 0 0 0-.402.398v.061a.402.402 0 0 0 .402.403h1.072a.403.403 0 0 0 .398-.403v-.061a.398.398 0 0 0-.398-.398h-1.072Z"
        fill="#78797A"
        stroke="#78797A"
        strokeWidth={0.4}
      />
    </svg>
  );
};

export default Support;
