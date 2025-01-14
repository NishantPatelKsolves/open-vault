import styled from "styled-components";
import { Modal } from "../../components/shared/common/Modal";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { InputField } from "../../components/shared/formFields";

const ResponsiveModal = styled(Modal)`
  width: 500px;
  height: auto;
  padding: 20px;
  margin-top: 10px;
  padding-top: 20px;

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
  /* padding: 0 26px 26px 18px; */
`;

const SecondaryHeading = styled.div`
  margin-top: 0;
  margin-bottom: 1.5rem !important;
  font-weight: 400;
`;

const AddGeoCreditsModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    onRequestClose();
  };

  const labelStyles = "font-size: 16px";
  return (
    <>
      <ResponsiveModal
        title="Add/Maintain Credits Here"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        onSubmit={handleSubmit((data) => {
          handleFormSubmit(data);
        })}
      >
        <FormContainer>
          <SecondaryHeading>Client&apos;s Details</SecondaryHeading>
          <InputField
            name="username"
            type="text"
            placeholder="Select Username"
            register={register}
            errors={errors}
            label="Username *"
            labelStyles={labelStyles}
          />

          <InputField
            name="modems"
            type="text"
            placeholder="Enter modems to be geocoded"
            register={register}
            errors={errors}
            label="Modems to be geocoded"
            labelStyles={labelStyles}
          />
        </FormContainer>
        <div className="d-flex justify-content-end mt-4 gap-3">
          <StyledButton type="button" variant="cancel" onClick={onRequestClose}>
            Cancel
          </StyledButton>
          <StyledButton type="submit" variant="submit">
            Add Geo-Credits
          </StyledButton>
        </div>
      </ResponsiveModal>
    </>
  );
};

AddGeoCreditsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddGeoCreditsModal;
