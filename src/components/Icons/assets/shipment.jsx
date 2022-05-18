import React from 'react';

const Shipment = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.33 16.662a.796.796 0 1 0 1.48-.59l-.892-2.244 5.285-1.17v3.781a.796.796 0 1 0 1.592 0v-3.78l5.285 1.17-.891 2.244a.796.796 0 1 0 1.48.589l1.234-3.112a.797.797 0 0 0-.04-.669.797.797 0 0 0-.525-.406l-2.563-.565V8.48a.796.796 0 0 0-.796-.796h-1.592V5.296a.796.796 0 0 0-.796-.796h-3.184a.796.796 0 0 0-.796.796v2.388H8.02a.796.796 0 0 0-.796.796v3.43l-2.563.55a.796.796 0 0 0-.526.405.796.796 0 0 0-.04.669l1.234 3.128Zm5.873-10.57h1.592v1.592h-1.592V6.092ZM8.815 9.276h6.368v2.276l-3.009-.685h-.35l-3.009.685V9.276Zm10.117 8.978c-.28.085-.547.206-.796.358a1.655 1.655 0 0 1-1.672 0 3.678 3.678 0 0 0-3.613 0 1.703 1.703 0 0 1-1.688 0 3.694 3.694 0 0 0-3.613 0 1.655 1.655 0 0 1-1.672 0 3.485 3.485 0 0 0-.796-.358.796.796 0 0 0-1.042.573.796.796 0 0 0 .533.987c.16.043.313.11.454.199a3.183 3.183 0 0 0 1.592.438c.581 0 1.152-.154 1.655-.446a2.11 2.11 0 0 1 2.038 0 3.303 3.303 0 0 0 3.28 0 2.11 2.11 0 0 1 2.037 0 3.183 3.183 0 0 0 3.263 0c.14-.089.294-.156.454-.2a.796.796 0 0 0 .613-.978.797.797 0 0 0-1.027-.573Z"
        fill={color || '#78797A'}
      />
    </svg>
  );
};

export default Shipment;
