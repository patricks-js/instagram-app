export const Input = ({
  identifier,
  type,
  placeholder,
  classLabel,
  classInput,
}) => {
  return (
    <label htmlFor={identifier} className={classLabel}>
      <input
        type={type}
        name={identifier}
        id={identifier}
        placeholder={placeholder}
        className={classInput}
      />
    </label>
  );
};
