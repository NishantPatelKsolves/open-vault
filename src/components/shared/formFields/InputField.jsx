import PropTypes from "prop-types";
import styled from "styled-components";

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: #333333;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.125rem;
  border: 1px solid #e5e5e5;
  background-color: #f6f6f6;
  border-radius: 0.5rem;
  color: #808080;
`;
export const InputField = ({
  name,
  type,
  placeholder,
  register,
  errors,
  label,
  onChange,
  onKeyDown,
}) => {
  // Default onKeyDown behavior
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </>
  );
};

InputField.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default InputField;
