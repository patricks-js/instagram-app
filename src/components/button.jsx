export const Button = ({ children, event }) => {
  return (
    <button
      onClick={event}
      className="bg-blue-500 hover:bg-blue-700 transition-colors text-white w-full pt-1 pb-1 rounded"
    >
      {children}
    </button>
  );
};
