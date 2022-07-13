export const Input = ({ identifier, type }) => {
  return (
    <label htmlFor={identifier} className="block mb-2">
      <input
        type={type}
        name={identifier}
        id={identifier}
        className="w-full rounded border border-gray-300 outline-none focus:border-gray-500 py-1 px-2"
      />
    </label>
  );
};
