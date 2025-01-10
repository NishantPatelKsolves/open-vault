import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Button from "../../components/shared/common/Button";
import UserLoginSchema from "../../utils/UserLoginSchema";
import { InputField } from "../../components/shared/formFields/";

const InnerContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 1350px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (max-width: 1024px) {
    padding: 20px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 20px;
  }
`;

const ResponsiveForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;
const ResetPasswordLink = styled.span`
  color: #007aff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14.89px;
  line-height: 24.81px;
  letter-spacing: 0.37px;
  text-align: right;
  width: 100%;
  display: block;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  right: 30px;

  @media (max-width: 760px) {
    justify-content: space-between;
    margin-top: 30px;
    position: relative;
    left: 135px;
    bottom: 0px;
  }
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
    <InnerContainer>
      <ResponsiveForm onSubmit={handleSubmit(onSubmit)}>
        <InputRow>
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
        </InputRow>

        <InputRow>
          <div className="col-md-6">
            <InputField
              label="Email Address *"
              type="email"
              name="email"
              placeholder="Email Address"
              register={register}
              errors={errors}
              style={{ flex: 1 }}
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
              style={{ flex: 1 }}
            />
          </div>
        </InputRow>

        <InputRow>
          <div className="col-md-6">
            <InputField
              label="Contact Number *"
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              register={register}
              errors={errors}
              style={{ flex: 1 }}
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
              style={{ flex: 1 }}
            />
          </div>
        </InputRow>

        <InputRow>
          <div className="col-md-6">
            <InputField
              label="State"
              type="text"
              name="state"
              placeholder="State"
              register={register}
              errors={errors}
              style={{ flex: 1 }}
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
              style={{ flex: 1 }}
            />
          </div>
        </InputRow>
        <ResetPasswordLink>Reset Password</ResetPasswordLink>
        <ButtonWrapper>
          <Button
            size="md"
            variant="secondary"
            onClick={() => console.log("Cancel clicked")}
            style={{
              color: "black",
              padding: "10px 20px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <div
              className="d-flex"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              <span>Cancel</span>
            </div>
          </Button>

          <Button
            size="md"
            variant="primary"
            onClick={() => console.log("Save Details clicked")}
            style={{
              padding: "12px 22px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <div
              className="d-flex"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              <span>Save Details</span>
            </div>
          </Button>
        </ButtonWrapper>
      </ResponsiveForm>
    </InnerContainer>
  );
};
