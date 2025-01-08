import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { OpenEye, SlashEye } from "../../../assets/icons";

const PasswordLabel = styled.label`
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

const ToggleIcon = styled.div`
  position: absolute;
  top: 68%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #808080;
`;
const PasswordField = ({
  name,
  //   type = "password",
  placeholder,
  register,
  errors,
  label,
  onChange,
  onKeyDown,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
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
      <PasswordLabel>{label}</PasswordLabel>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(name)}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <ToggleIcon onClick={togglePasswordVisibility}>
        {showPassword ? <SlashEye /> : <OpenEye />}
      </ToggleIcon>
      {errors[name] && <p style={{ color: "red" }}>{errors[name]?.message}</p>}
    </>
  );
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default PasswordField;
