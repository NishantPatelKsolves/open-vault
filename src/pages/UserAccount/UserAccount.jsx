import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Button from "../../components/shared/common/Button";
import UserLoginSchema from "../../utils/UserLoginSchema";
import { InputField } from "../../components/shared/formFields/";

const OuterContainer = styled.div`
  background-color: #f6f6f6;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  background-color: white;
  padding: 40px;
  width: 100%;
  max-width: 1350px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 1024px) {
    padding: 20px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 20px;
  }
`;

// const Label = styled.label`
//   font-size: 16px;
//   font-weight: 500;
//   margin-bottom: 8px;
//   display: block;
// `;

const ResponsiveForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const UserAccount = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Details saved successfully!");
    reset();
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <ResponsiveForm onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <div className="col-md-6">
              <InputField
                label="First Name *"
                type="text"
                name="firstName"
                placeholder="First Name"
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-md-6">
              <InputField
                label="Last Name *"
                type="text"
                name="lastName"
                placeholder="Last Name"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <InputField
                label="Email Address *"
                type="email"
                name="email"
                placeholder="Email Address"
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-md-6">
              <InputField
                label="Designation"
                type="text"
                name="designation"
                placeholder="Designation"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <InputField
                label="Contact Number *"
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-md-6">
              <InputField
                label="City"
                type="text"
                name="city"
                placeholder="City"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <InputField
                label="State"
                type="text"
                name="state"
                placeholder="State"
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-md-6">
              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <ButtonContainer>
            <Button
              size="md"
              variant="secondary"
              onClick={() => console.log("Cancel clicked")}
              style={{
                backgroundColor: "white",
                borderColor: "#D1D5DB",
                color: "black",
              }}
            >
              <div
                className="d-flex"
                style={{ fontSize: "14px", fontWeight: "750" }}
              >
                <span>Cancel</span>
              </div>
            </Button>

            <Button
              size="md"
              variant="primary"
              onClick={() => console.log("Save Details clicked")}
              style={{ backgroundColor: "orange", borderColor: "orange" }}
            >
              <div
                className="d-flex"
                style={{ fontSize: "14px", fontWeight: "750" }}
              >
                <span>Save Details</span>
              </div>
            </Button>
          </ButtonContainer>
        </ResponsiveForm>
      </InnerContainer>
    </OuterContainer>
  );
};
