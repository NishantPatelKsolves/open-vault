import PropTypes from "prop-types";
import { Modal } from "../../components/shared/common/Modal";
import { InputField } from "../../components/shared/formFields/InputField";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  ${(props) =>
    props.variant === "cancel"
      ? `
      background-color: #ffffff;
      color: #000000;
      border: 1px solid #B0B0B0;
    `
      : `
      background-color: #F49200;
      color: #ffffff;
    `}
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResponsiveModal = styled(Modal)`
  width: 500px;
  height: auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: auto;
    padding: 10px;
  }
`;

const UpdatePasswordModal = ({ isOpen, onRequestClose, onSubmit }) => {
  console.log("Modal render: isOpen =", isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log("Form Submitted with Data:", data);
    onSubmit(data);
    onRequestClose();
  };

  return (
    <ResponsiveModal
      title="Update Your Password"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={handleSubmit((data) => {
        console.log("handleSubmit called with data:", data); // Debugging
        handleFormSubmit(data);
      })}
    >
      <FormContainer>
        <InputField
          name="oldPassword"
          type="password"
          placeholder="Enter your old password"
          register={register}
          errors={errors}
          label="Old Password"
        />

        <InputField
          name="newPassword"
          type="password"
          placeholder="Enter your new password"
          register={register}
          errors={errors}
          label="New Password"
        />

        <InputField
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
          register={register}
          errors={errors}
          label="Confirm Password"
        />
      </FormContainer>
      <div className="d-flex justify-content-end mt-4 gap-3">
        <StyledButton type="button" variant="cancel" onClick={onRequestClose}>
          Cancel
        </StyledButton>
        <StyledButton type="submit" variant="submit">
          Submit
        </StyledButton>
      </div>
    </ResponsiveModal>
  );
};

// PropTypes validation
UpdatePasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UpdatePasswordModal;
