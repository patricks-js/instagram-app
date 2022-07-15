export const Button = ({ children, event, className }) => {
  return (
    <button onClick={event} className={className}>
      {children}
    </button>
  );
};
