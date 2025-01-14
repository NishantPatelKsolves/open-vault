import styled from "styled-components";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useState } from "react";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

const InputField = styled.input`
  width: 60px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
`;

const MaxRepetitionField = ({ value, min, max, onChange, defalutValue }) => {
  const [currentValue, setCurrentValue] = useState(value || defalutValue);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= min && newValue <= max) {
      setCurrentValue(newValue);
      onChange(newValue);
    } else {
      toast.error(
        `Please enter a max repetition value in range of ${min}-${max}`
      );
    }
  };

  return (
    <InputWrapper>
      <InputField
        type="number"
        value={currentValue}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
    </InputWrapper>
  );
};

MaxRepetitionField.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defalutValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MaxRepetitionField;
