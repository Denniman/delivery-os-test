const Vector = ({ color, ...props }) => {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.111 19.455h7.778c1.711 0 3.111-1.382 3.111-3.07v-4.99c0-.998-.467-1.843-1.244-2.457l-3.89-2.917c-1.088-.767-2.644-.767-3.733.077l-3.889 2.84C5.467 9.552 5 10.397 5 11.395v4.99c0 1.688 1.4 3.07 3.111 3.07Zm-1.555-8.06c0-.461.233-.921.622-1.229l3.889-2.917c.31-.23.622-.307.933-.307.311 0 .622.077.933.307l3.89 2.917c.388.307.621.768.621 1.229v4.99c0 .844-.7 1.534-1.555 1.534H8.11a1.55 1.55 0 0 1-1.555-1.535v-4.99Z"
        fill={color || '#78797A'}
      />
    </svg>
  );
};

export default Vector;
